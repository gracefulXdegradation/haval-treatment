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
  
  window.addEventListener('load', () => {
    const h1 = refSlide1.current.querySelector('h1')
    const h3 = refSlide1.current.querySelector('h3')
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
  }, [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5])

  return (
    <div className={style.app}>
      <section ref={refSlide1} className={cn(style.slide1, style.panel)}>
        <h1>
          <span className={style.haval}>HAVAL</span>
          <span className={style.f7}>F7</span>
        </h1>
        <h3>
          {'Director’s treatment by David Verges'.split('').map((l, i) => <span key={i+l}>{l}</span>)}
        </h3>
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
