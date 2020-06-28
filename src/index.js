import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import './index.scss'

window.gsap.registerPlugin(window.ScrollTrigger)

render(
  <App />,
  document.getElementById('root')
)