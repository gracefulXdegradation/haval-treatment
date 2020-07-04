import React, { useEffect, useRef } from 'react'
import times from 'lodash/times'
import style from './style.module.scss'

export const Slide4 = () => {
  const refText = useRef(null)
  const refTextVert = useRef(null)

  useEffect(() => {
    window.gsap.to(refText.current.querySelectorAll('i'), 10, {
      xPercent: '-=100',
      ease: 'none',
      repeat: -1
    })

    window.gsap.to(refTextVert.current.querySelectorAll('i'), 10, {
      yPercent: '+=100',
      ease: 'none',
      repeat: -1
    })
    
  }, [refText])

  return (
    <div className={style.slideRoot}>
      <div ref={refText} className={style.rollingText}>
        {times(2, (i) => (
          <i className={style.stripe} key={`marquee-1.${i}`}>
            {times(5, (j) => <span className={style.text} key={`text-${j}`}>Wardrobe</span>)}
          </i>
        ))}
      </div>

      <div ref={refTextVert} className={style.rollingTextVert}>
        {times(2, (i) => (
          <i className={style.stripe} key={`marquee-2.${i}`}>
            {times(10, (j) => <span className={style.text} key={`text-${j}`}>Wardrobe</span>)}
          </i>
        ))}
      </div>
    </div>
  )
}
