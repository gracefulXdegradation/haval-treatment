import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'

export const Slide3 = () => {
  const refBg = useRef(null)
  const refCell1 = useRef(null)
  const refCell2 = useRef(null)
  const refCell3 = useRef(null)
  const refText = useRef(null)
  const refRoot = useRef(null)

  useEffect(() => {
    const rootEl = refRoot.current
    const textEl = refText.current
    const cell1El = refCell1.current
    const cell2El = refCell2.current
    const cell3El = refCell3.current
    const bgEl = refBg.current
    let request
    let mouse = { x: 0, y: 0 }
    const slideRect = rootEl.getBoundingClientRect()
    let cx = slideRect.width / 2
    let cy = slideRect.height / 2
    const handleMouseMove = (event) => {
      mouse = {
        x: event.x,
        y: event.y
      }
      cancelAnimationFrame(request);
		  request = requestAnimationFrame(update);
    }

    const update = () => {
      const dx = mouse.x - cx;
      const dy = mouse.y - cy;

      const tiltx = (dy / cy);
      const tilty = - (dx / cx);
      // const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      // const degree = (radius * 20);
      window.gsap.to(bgEl, 1, {
        transform: `translate(${tilty * 3}%, ${-tiltx * 3}%) scale(1.06)`,
        ease: 'power2.out'
      })
      window.gsap.to(cell1El.querySelector(`.${style.frame}`), 1, {
        transform: `translate(${tilty * 2}%, ${-tiltx * 2}%)`,
        ease: 'power2.out'
      })
      window.gsap.to(cell1El.querySelector(`.${style.inner}`), 1, {
        transform: `translate(${tilty * 1.2}%, ${-tiltx * 1.2}%) scale(1.2)`,
        ease: 'power2.out'
      })

      window.gsap.to([cell2El, cell3El].map(el => el.querySelector(`.${style.frame}`)), 1, {
        transform: `translate(${-tilty * 2}%, ${tiltx * 2}%)`,
        ease: 'power2.out'
      })
      window.gsap.to([cell2El, cell3El].map(el => el.querySelector(`.${style.inner}`)), 1, {
        transform: `translate(${-tilty * 1.2}%, ${tiltx * 1.2}%) scale(1.2)`,
        ease: 'power2.out'
      })

      window.gsap.to(textEl.querySelector('i'), 1, {
        transform: `translate(${-tilty * 1.2}vw, ${tiltx * 1.2}vw)`,
        ease: 'power2.out'
      })
    }
    rootEl.addEventListener('mousemove', handleMouseMove, false)
    return () => rootEl.removeEventListener('mousemove', handleMouseMove)
  }, [refBg])

  return (
    <div ref={refRoot} className={style.slideRoot}>
      <div ref={refBg} className={style.background} />
      <div ref={refCell1} className={style.cell1}>
      <div className={style.frame}>
          <div className={style.inner} />
        </div>
      </div>
      <div ref={refCell2} className={style.cell2}>
        <div className={style.frame}>
          <div className={style.inner} />
        </div>
      </div>
      <div ref={refCell3} className={style.cell3}>
        <div className={style.frame}>
          <div className={style.inner} />
        </div>
      </div>
      <h2 ref={refText}>
        <i>
          Look & feel
        </i>
      </h2>
    </div>
  )
}
