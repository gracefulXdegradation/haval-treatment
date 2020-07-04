import React, { useEffect, useRef } from 'react'
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
        <i className={style.stripe}>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
        </i>
        <i className={style.stripe}>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
        </i>
      </div>

      <div ref={refTextVert} className={style.rollingTextVert}>
        <i className={style.stripe}>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
        </i>
        <i className={style.stripe}>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
          <span className={style.text}>Wardrobe</span>
        </i>
      </div>
    </div>
  )
}
