import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'

export const Slide1 = () => {
  const refH1 = useRef(null)
  const refH3 = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      const h1 = refH1.current
      const h3 = refH3.current
      const h1rect = h1.getBoundingClientRect()
      const h3rect = h3.getBoundingClientRect()
      const bodyRect = document.body.getBoundingClientRect()

      const tl = window.gsap.timeline()
      window.gsap.set(h3, { y: bodyRect.height / 2 + h1rect.height / 2 - h3rect.height * 0.7 })
      tl
      .fromTo(h1, {
        x: -h1rect.width,
        y: bodyRect.height / 2 - h1rect.height / 2,
        skewX: 20,
        visibility: 'visible'
      }, {
        x: bodyRect.width / 2 - h1rect.width / 2,
        skewX: 0,
        duration: 1,
        delay: 1,
        ease: 'back'
      })
      .fromTo(h3.querySelectorAll('span'), {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1,
        stagger: 0.02
      })
    }, false)
  }, [refH1, refH3])

  return (
    <div className={style.slideRoot}>
      <h1 ref={refH1}>
        <span className={style.haval}>HAVAL</span>
        <span className={style.f7}>F7</span>
      </h1>
      <h3 ref={refH3}>
        {'Director’s treatment by David Verges'.split('').map((l, i) => <span key={i+l}>{l}</span>)}
      </h3>
    </div>
  )
}
