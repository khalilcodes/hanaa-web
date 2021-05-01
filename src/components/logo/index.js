import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import { gsap } from "gsap"
import { ScrollToPlugin, ScrollTrigger, TimelineLite } from "gsap/all"

import ResizeObserver from 'resize-observer-polyfill'

import { stylesLogo, stylesBottom } from "./logo.module.scss"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const Logo = ({ bottom }) => {
  let logoRef = useRef()
  
  const [tl] = React.useState(new TimelineLite({ paused: true }))

  const resizeObserver = React.useMemo(() => new ResizeObserver(() => {
    ScrollTrigger.refresh()
  }),[])

  useEffect(() => {
    let logo = logoRef
    const scrollHeight = () =>
      bottom
        ? logo.scrollHeight - window.innerHeight
        : window.innerHeight - logo.scrollHeight

    tl.to(logo, {
      y: scrollHeight,
      ease: "none",
      scrollTrigger: {
        scrub: 0.7,
        invalidateOnRefresh: true
      }
    })

    resizeObserver.observe(document.body)
  },[bottom, tl, resizeObserver])

  const position = bottom ? stylesBottom : ""

  return (
    <div ref={el => logoRef = el} className={`${stylesLogo} ${position}`}>
      <Link to="/">H</Link>
    </div>
  )
}

export default Logo
