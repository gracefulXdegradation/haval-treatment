import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import slide2 from './img/slide2.png'
import style from './style.module.scss'

export const App = () => {
  const refSlide1 = useRef(null)
  const refSlide2 = useRef(null)
  const refSlide3 = useRef(null)
  const refSlide4 = useRef(null)
  const refSlide5 = useRef(null)

  useEffect(() => {
    let sections = [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5].map(ref => ref.current);
    sections.forEach((panel, i) => {
      window.ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false
      });
    });

    window.ScrollTrigger.create({
      snap: 1 / (sections.length - 1)
    });
  }, [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5])

  return (
    <div className={style.app}>
      <section ref={refSlide1} className={cn(style.slide1, style.panel)}>
        <h1>
          <span className={style.haval}>HAVAL</span>
          <span className={style.f7}>F7</span>
        </h1>
      </section>
      <section ref={refSlide2} className={cn(style.slide2, style.panel)}>
        <img src={slide2} />
      </section>
      <section ref={refSlide3} className={cn(style.slide3, style.panel)}>
      </section>
      <section ref={refSlide4} className={cn(style.slide4, style.panel)}>4</section>
      <section ref={refSlide5} className={cn(style.slide5, style.panel)}>5</section>
    </div>
  )
}
