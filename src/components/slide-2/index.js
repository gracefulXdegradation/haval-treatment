import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'

export const Slide2 = () => {
  const refRoot = useRef(null)
  const refText = useRef(null)
  const refTextWrap = useRef(null)

  useEffect(() => {
    const rootEl = refRoot.current
    const textEl = refTextWrap.current
    let request;
    let mouse = { x: 0, y: 0 };
    const slideRect = rootEl.getBoundingClientRect()
    let cx = slideRect.width / 2;
    let cy = slideRect.height / 2;
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
      const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      const degree = (radius * 20);
      window.gsap.to(textEl, 1, {
        transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`,
        ease: 'power2.out'
      });
    }
    rootEl.addEventListener('mousemove', handleMouseMove, false)
    return () => rootEl.removeEventListener('mousemove', handleMouseMove)
  }, [refRoot, refText, refTextWrap])

  return (
    <div ref={refRoot} className={style.slideRoot}>
      <div ref={refTextWrap} className={style.textWrap}>
        <h2 ref={refText} className={style.text}>
          Your<br />
          intellectual<br />
          freedom
        </h2>
        <h2 ref={refText} className={style.text}>
          Your<br />
          intellectual<br />
          freedom
        </h2>
      </div>
    </div>
  )
}
