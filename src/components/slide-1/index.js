import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'

export const Slide1 = () => {
  const refH1 = useRef(null)
  const refH3 = useRef(null)
  const refRoot = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      const h1 = refH1.current
      const h3 = refH3.current
      const h1rect = h1.getBoundingClientRect()
      const h3rect = h3.getBoundingClientRect()
      const rootRect = refRoot.current.getBoundingClientRect()

      const animateHeading = _tl => {
        window.gsap.set(h1, { 
          x: rootRect.width / 2 - h1rect.width / 2,
          y: rootRect.height / 2 - h1rect.height / 2,
          skewX: 0,
          visibility: 'visible'
        })

        return _tl.from(h1.querySelectorAll('i'), {
          x: -(rootRect.width + h1rect.width) / 2,
          skewX: 20,
          duration: 1,
          delay: 1,
          stagger: -.1,
          ease: 'back'
        })
      }

      const animateSubheading = _tl => {
        window.gsap.set(h3, {
          y: rootRect.height / 2 + h1rect.height / 2 - h3rect.height * 0.7
        })

        return _tl.fromTo(h3.querySelectorAll('span'), {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          stagger: 0.02
        })
      }

      let tl = window.gsap.timeline()
      tl = animateHeading(tl)
      tl = animateSubheading(tl)
    }, false)
  }, [refH1, refH3, refRoot])

  return (
    <div ref={refRoot} className={style.slideRoot}>
      <h1 ref={refH1}>
        <i className={style.heading}>
          <span className={style.haval}>HAVAL</span>
          <span className={style.f7}>F7</span>
        </i>
      </h1>
      <h3 ref={refH3}>
        {'Director’s treatment by David Verges'.split('').map((l, i) => <span key={i+l}>{l}</span>)}
      </h3>
    </div>
  )
}
