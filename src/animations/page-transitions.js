import React, { useState, useEffect } from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import gsap from "gsap"
import { useMediaQuery } from '@material-ui/core'

gsap.registerPlugin()

const PageTransitions = ({ children, location }) => {
  const [node, setNode] = useState(null)
  const [tl] = useState(gsap.timeline({ paused: true }))

  const matches = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    if (node !== null) {
      var page = node.querySelectorAll("header, main, footer")
      tl.to(page, { opacity: 1 })

      if (matches) {
        setTimeout(() => {
          var left = node.querySelector("#grid").firstChild
          var right = node.querySelector("#grid").lastChild

          var tween = gsap.timeline().to([left, right], {
            x: gsap.utils.wrap([0, 0]),
          })
          tl.add(tween)
        }, 150);
      }
    }
  },[node, tl, matches])

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={1000}
        in={true}
        appear={true}
        onEnter={() => tl.play()}
        onExit={() => tl.reverse()}
        addEndListener={(node,done) => {
          if (node) {
            setNode(node)
            tl.eventCallback("onComplete", done, ["{self}"])
          }
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