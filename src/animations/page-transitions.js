import React, { useState, useEffect } from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import gsap from "gsap"
import useWindowSize from '../hooks/useWindowSize'

gsap.registerPlugin()

const PageTransitions = ({ children, location }) => {
    const { width } = useWindowSize()
    let breakpoint = width < 1024

    const [timeline] = useState(gsap.timeline())
    const [state, setState] = useState({
      isAppearing: true,
      played: false
    })

    const anim = (node, animationState) => {
      if (typeof window !== "undefined") {
        var page = node.querySelectorAll("header, main, footer")
  
        if (animationState === "enter") {
          timeline.from(page, {
            autoAlpha: 0,
          })
        } else {
          timeline.to(page, {
            autoAlpha: 0,
            duration: 0.3
          })
        }
  
        if (!breakpoint) {
          var left = node.querySelector("#grid").firstChild
          var right = node.querySelector("#grid").lastChild
  
          const gridTween = gsap.timeline().to([left,right], {
            x: gsap.utils.wrap(animationState === "enter" ? [0,0] : [-left.clientWidth, right.clientWidth]),
            delay: 0.5,
            onComplete: () => animationState === "enter" ? setState({ ...state, played: true }) : null
          })
  
          timeline.add(gridTween, "<")
        }
        return timeline
      }
    }

    useEffect(() => {
      if (breakpoint) setState({ isAppearing: false, played: false })

      if (!breakpoint && !state.played && !state.isAppearing) {
        setTimeout(() => {
          var grid = document.querySelector("#grid")
          gsap.set([grid.firstChild,grid.lastChild], {
            x: gsap.utils.wrap([0,0])
          })
        }, 100);
      }
    },[breakpoint, state.isAppearing, state.played])


    const exit = (node) => {
      anim(node, "exit").play()
    }

    const enter = (node, isAppearing) => {
      setState({ ...state, isAppearing: isAppearing })
      anim(node, "enter").play()
    }

  return (
    <SwitchTransition mode="out-in" >
      <Transition
        key={location.pathname}
        timeout={{
          appear: 2000,
          enter: 2000,
          exit: 1000
        }}
        in={true}
        appear={true}
        onExit={exit}
        onEnter={enter}
      >
        <div style={{ overflow: "hidden" }}>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransitions