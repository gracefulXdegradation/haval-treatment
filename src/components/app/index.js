import React, { useEffect, useRef } from 'react'
import { Slide1 } from '../slide-1'
import { Slide2 } from '../slide-2'
import { Slide3 } from '../slide-3'
import { Slide4 } from '../slide-4'
import { Slide5 } from '../slide-5'
import style from './style.module.scss'

export const App = () => {
  const refRoot = useRef(null)
  const refSlide1 = useRef(null)
  const refSlide2 = useRef(null)
  const refSlide3 = useRef(null)
  const refSlide4 = useRef(null)
  const refSlide5 = useRef(null)

  useEffect(() => {
    let sections = [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5].map(ref => ref.current);

    window.gsap.set(sections, {zIndex: (i, target, targets) => targets.length - i});

    window.gsap.to(sections.slice(0, sections.length - 1), {
      yPercent: -100, 
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: refRoot.current,
        start: "top top",
        end: `+=${(sections.length - 1) * 100}%`,
        scrub: true,
        pin: true
      }
    });

    window.ScrollTrigger.create({
      snap: 1 / (sections.length - 1)
    });
  }, [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5, refRoot])

  return (
    <div ref={refRoot} className={style.app}>
      <section ref={refSlide1}>
        <Slide1 />
      </section>
      <section ref={refSlide2}>
        <Slide2 />
      </section>
      <section ref={refSlide3}>
        <Slide3 />
      </section>
      <section ref={refSlide4}>
        <Slide4 />
      </section>
      <section ref={refSlide5}>
        <Slide5 />
      </section>
    </div>
  )
}
