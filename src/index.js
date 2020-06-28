import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import { gsap, ScrollTrigger } from 'gsap/all'
import './index.scss'

gsap.registerPlugin(ScrollTrigger)

render(
  <App />,
  document.getElementById('root')
)