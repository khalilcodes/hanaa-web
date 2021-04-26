import React, { useState, useEffect, useRef, useContext } from "react"
import { gsap } from "gsap"

import { menuBar } from "./header.module.scss"
import { WebContext } from '../../hooks/context'

import NavigationLinks from './navigation'

const Hamburger = ({ breakpoint }) => {
    const [{ showMenu }, dispatch] = useContext(WebContext)

    let buttonRef = useRef(null)
    const [hamburgerTimeline] = useState(gsap.timeline({ paused: true }))
    const [headerTimeline] = useState(gsap.timeline({ paused: true }))
    
    useEffect(() => {
      if (breakpoint) {
        var hamburger = buttonRef.current
        var container = hamburger.parentElement
        
        var spans = gsap.utils.toArray(hamburger.children)
        var topBottom = [spans[0], spans[2]]
        var centerY = spans[1].offsetTop - spans[1].offsetHeight

        hamburgerTimeline
          .fromTo(spans, {
            background: "#454e57"
          },{
            background: "white",
          })
          .to(topBottom, {
            y: gsap.utils.wrap([centerY, -centerY]),
          })
          .to(spans[1], {
            autoAlpha: 0,
          })
          .to(topBottom, {
            rotate: gsap.utils.wrap([45, -45]),
          })
          .reverse()
          .duration(0.8)

        headerTimeline
          .to(container.lastChild, {
            y: 0,
          })
          .to("header a", {
            color: "white",
          })
          .reverse()
          .duration(0.8)
      }
    }, [breakpoint, headerTimeline, hamburgerTimeline])

  useEffect(() => {
    if (breakpoint) {
      hamburgerTimeline.reversed(!showMenu)
      headerTimeline.reversed(!showMenu)
    }
  }, [showMenu, breakpoint, headerTimeline, hamburgerTimeline])

  const handleMenu = e => {
    if (typeof window !== "undefined" && breakpoint) {
      if (e) dispatch({ type: "toggle_menu", payload: !showMenu })
    }
  }

  return (
    <>
      <button
        className={menuBar}
        ref={buttonRef}
        onClick={e => handleMenu(e)}
      >
        <span />
        <span />
        <span />
      </button>
      <NavigationLinks breakpoint={breakpoint} />
    </>
  )
}

export default Hamburger
