import React, { useEffect, useRef } from 'react'
import { Slide1 } from '../slide-1'
import { Slide2 } from '../slide-2'
import { Slide3 } from '../slide-3'
import { Slide4 } from '../slide-4'
import { Slide5 } from '../slide-5'
import style from './style.module.scss'

export const App = () => {
  const refRoot = useRef(null)
  const refHor = useRef(null)
  const refTrigger = useRef(null)
  const refSlide1 = useRef(null)
  const refSlide2 = useRef(null)
  const refSlide3 = useRef(null)
  const refSlide4 = useRef(null)
  const refSlide5 = useRef(null)

  useEffect(() => {
    let sections = [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5].map(ref => ref.current);

    window.gsap.set(sections, {zIndex: (i, target, targets) => targets.length - i});

    const tl = window.gsap.timeline()

    tl
    // .to(refSlide1.current, {
    //   yPercent: -100, 
    //   ease: "none",
    //   // stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: refRoot.current,
    //     start: "top top",
    //     end: `+=100%`,
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // .to(refHor.current, {
    //   xPercent: -100,
    //   x: window.innerWidth,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: refSlide1.current,
    //     start: "bottom top",
    //     endTrigger: refHor.current,
    //     end: () => window.innerWidth * 2,
    //     scrub: true,
    //     pin: true,
    //     anticipatePin: 1,
    //     markers: true
    //   }
    // })


    // .to(refHor.current, {
    //   // yPercent: 100,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: refHor.current,
    //     start: 'top top',
    //     end: '+=100%',
    //     scrub: true,
    //     pin: true,
    //     // markers: true
    //   }
    // })


    .from(refSlide2.current, {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: refRoot.current,
        start: 'top top',
        end: '+=100%',
        scrub: true
      }
    })
    .to(refHor.current, {
      xPercent: -100,
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: refHor.current,
        start: "top top",
        end: () => window.innerWidth * 3,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true
      }
    })

    // window.ScrollTrigger.create({
    //   snap: 1 / (sections.length - 1)
    // });
  }, [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5, refRoot, refHor])

  return (
    <div ref={refRoot} className={style.app}>
      <section ref={refSlide1} className={style.slide1}>
        <Slide1 />
      </section>
      <div className={style.horizontal} ref={refHor}>
        <section ref={refSlide2} className={style.slide2}>
          <Slide2 />
        </section>
        <section ref={refSlide3} className={style.slide3}>
          <Slide3 />
        </section>
        <section ref={refSlide4} className={style.slide4}>
          <Slide4 />
        </section>
      </div>
      <section ref={refSlide5} className={style.slide5}>
        <Slide5 />
      </section>
    </div>
  )
}
