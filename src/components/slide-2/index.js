import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'

export const Slide2 = () => {
  const refRoot = useRef(null)
  const refText = useRef(null)
  const refBg = useRef(null)

  useEffect(() => {
    const rootEl = refRoot.current
    const textEl = refText.current
    const bgEl = refBg.current
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
      window.gsap.to(bgEl, 1, {
        transform: `translate(${tilty * 3}%, ${-tiltx * 3}%) scale(1.06)`,
        ease: 'power2.out'
      })
    }
    rootEl.addEventListener('mousemove', handleMouseMove, false)
    return () => rootEl.removeEventListener('mousemove', handleMouseMove)
  }, [refRoot, refText, refBg])

  return (
    <div ref={refRoot} className={style.slideRoot}>
      <div ref={refBg} className={style.background} />
      <div className={style.textWrap}>
        <h2 className={style.text}>
          <div ref={refText} className={style.rotation}>
            <i className={style.hoverTrigger}>
              <span data-hover="Your">Your</span><br />
              <span data-hover="intellectual">intellectual</span><br />
              <span data-hover="freedom">freedom</span>
            </i>
          </div>
        </h2>
      </div>
    </div>
  )
}
