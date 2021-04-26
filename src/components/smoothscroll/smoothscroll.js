import React, { useEffect, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import ResizeObserver from 'resize-observer-polyfill'

import { gsap } from "gsap"
import { ScrollTrigger, ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const SmoothScroll = ({ children }) => {
    const size = useWindowSize()

    // let app = useRef()
    // let scrollContainer = useRef()

    // useEffect(() => {
    //     let scrollContainer = document.querySelector("#gatsby-focus-wrapper")
    //   function setHeight() {
    //     document.body.style.height = `${
    //       scrollContainer.clientHeight
    //     }px`
    //   }

    //   ScrollTrigger.addEventListener("refreshInit", setHeight)

    //   gsap.to(scrollContainer, {
    //     y: () =>
    //       -(
    //         scrollContainer.clientHeight -
    //         document.documentElement.clientHeight
    //       ),
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: document.body,
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub: 1,
    //       invalidateOnRefresh: true,
    //     },
    //   })
    // })

    const [ height, setHeight ] = useState(window.innerHeight)

    const config = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    }

    let ro = new ResizeObserver(elements => {
        for ( let elem of elements ) {
            const crx = elem.contentRect
            setHeight(crx.height)
        }
    })

    useEffect(() => {
        let scrollContainer = document.querySelector("#app")
        document.body.style.height = `${
            scrollContainer.clientHeight
        }px`
        ro.observe(scrollContainer)
    }, [size.height])

    useEffect(() => {
          requestAnimationFrame(() => smoothScrolling())
    },[])

    const smoothScrolling = () => {
        let scrollContainer = document.querySelector("#app")
        config.current = window.scrollY
        config.previous += (config.current - config.previous) * config.ease
        config.rounded = Math.round(config.previous * 100) / 100

        scrollContainer.style.transform = `translate3d(0, -${config.rounded}px, 0)`

        requestAnimationFrame(() => smoothScrolling())
    }

    return (
        <>
            <div id="app">{children}</div>
            <div style={{ height: height }} />
        </>
    )
}

export default SmoothScroll
