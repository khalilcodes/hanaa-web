import React, { useState, useEffect } from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import gsap from "gsap"
import useWindowSize from '../hooks/useWindowSize'

gsap.registerPlugin()

const PageTransitions = ({ children, location }) => {
  const { width } = useWindowSize()
  var breakpoint = width >= 1024

  const [node, setNode] = useState(null)
  const [tl] = useState(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (node !== null) {
      var page = node.querySelectorAll("header, main, footer")
      tl.to(page, { autoAlpha: 1 })

      if (breakpoint) {
        setTimeout(() => {
          var left = node.querySelector("#grid").firstChild
          var right = node.querySelector("#grid").lastChild

          var tween = gsap.timeline().to([left, right], {
            x: gsap.utils.wrap([0, 0]),
          })
          tl.add(tween)
        }, 100);
      }
    }
  },[node, tl, breakpoint])

  const onEnter = node => {
    if(node) {
      var page = node.querySelectorAll("header, main, footer")
      gsap.set(page, { autoAlpha: 0 })
    }
  }

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={1000}
        in={true}
        appear={true}
        onEnter={onEnter}
        onEntering={() => tl.play()}
        onExiting={() => tl.reverse()}
        addEndListener={(node,done) => {
          if (node) setNode(n => n = node)
          tl.eventCallback("onComplete", done, ["{self}"])
        }}
      >
        <div id="page-transition-wrapper">
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransitions