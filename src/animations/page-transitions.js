import React, { useEffect } from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import gsap from "gsap"
import useWindowSize from '../hooks/useWindowSize'

gsap.registerPlugin()

const PageTransitions = ({ children, location }) => {
    const { width } = useWindowSize()
    let breakpoint = width < 1024

    const [state, setState] = React.useState({ x: 0, y: 0 })

    const noScroll = () => window.scrollTo(0,0)

    useEffect(() => {
      setState({ x: window.scrollX, y: window.scrollY })

      // window.onpopstate = () => {
      //     window.addEventListener('scroll', noScroll)
      //     setTimeout(() => {
      //         window.removeEventListener('scroll', noScroll)
      //     }, 1000);
      // }
    },[])


    function getNode(node) {
      var page = node.querySelectorAll("header, main, footer")
      var left, right

      if (!breakpoint) {
        left = node.querySelector("#grid").firstChild
        right = node.querySelector("#grid").lastChild
      }

      if (!breakpoint) return { 
        page, 
        left, 
        right 
      }

      return { page }
    }

    const exit = (node) => {
        const { page } = getNode(node)

        const tl = gsap.timeline()
        tl
          .to(page, {
            autoAlpha: 0,
            duration: 0.3
          })

        if (!breakpoint) {
          const { left, right } = getNode(node)
          const tween = gsap.to([left, right], {
            x: gsap.utils.wrap([-left.clientWidth, right.clientWidth]),
          })
          tl.add(tween, "<")
        }
    }

    const enter = (node) => {
        const { page } = getNode(node)

        const tl = gsap.timeline()
        tl
          .from(page, {
            autoAlpha: 0,
          })

        if (!breakpoint) {
          const { left, right } = getNode(node)
          const tween = gsap.to([left, right], {
            x: gsap.utils.wrap([0, 0]),
            delay: 1,
          })
          tl.add(tween, "<")
        }
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
        addEndListener={(node, done) => {
          
        }}
      >
        <div style={{ overflow: "hidden" }}>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransitions