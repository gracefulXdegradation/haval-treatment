import React, { useEffect, useRef } from 'react'
import times from 'lodash/times'
import style from './style.module.scss'

export const Slide5 = () => {
  const refRoot = useRef(null)

  useEffect(() => {
    const images = Array.from(refRoot.current.querySelectorAll('span'))
    images.map((el, i) => {
      const { width: imageWidth } = el.getBoundingClientRect()
      const margin = imageWidth / 6
      const totalWidth = images.length * imageWidth - images.length * margin
      const scaleDelta = 0.05

      return window.gsap.fromTo(el, {
        x: totalWidth - imageWidth,
        yPercent: window.gsap.utils.random(-25, 25),
        xPercent: window.gsap.utils.random(-5, 5),
        scale: window.gsap.utils.random(1 - scaleDelta, 1 + scaleDelta)
      }, {
        x: -imageWidth,
        ease: 'none',
        duration: 4 * images.length,
        repeat: -1
      }).progress(1 - (i * imageWidth - i * margin) / totalWidth)
    })
  }, [refRoot])

  return (
    <div ref={refRoot} className={style.slideRoot}>
      {times(10, (i) => (
        <span className={style[`image-${i + 1}`]} key={`image.${i}`} />
      ))}
    </div>
  )
}
