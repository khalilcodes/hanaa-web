import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "gsap/all"
import useWindowSize from '../hooks/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

export default function HomepageAnimations() {
  const { width } = useWindowSize()

  let animationProperties = useRef({
    opacity: 0,
    y: 50,
    duration: 1.3,
    scrollTrigger: {
      start: "20% 100%",
      trigger: "",
    },
  })

  /* banner animations */

  useEffect(() => {
    var title = document.querySelector("#banner-title")
    var about = document.querySelector("#about-text")

    const tl = gsap.timeline()

    tl.to([title, about], {
      opacity: 1,
    })
    .from(title.firstChild, {
      y: title.clientHeight,
      ease: "power4.out",
      duration: 1.5
    }).from(about, {
      y: -about.parentElement.clientHeight,
      ease: "power4.out",
      duration: 1.5,
    },"<0.75")

    tl.delay(0.5)
  }, [])

  /* selected works section animations */

  useEffect(() => {
    let worksSection = document.querySelector("#selected-works")

    gsap.from(
      worksSection.children[0], {
        ...animationProperties.current,
        ...animationProperties.current["scrollTrigger"]["trigger"] = worksSection,
      }
    )

    gsap.from(
      worksSection.children[1], {
        ...animationProperties.current,
        ...animationProperties.current["scrollTrigger"]["trigger"] = worksSection.children[1],
      }
    )
  },[animationProperties])

  /* university project animations */

  useEffect(() => {
    let projectSection = document.querySelector("#uni-project")

    gsap.from(projectSection.children[0], {
      ...animationProperties.current,
      ...animationProperties.current["scrollTrigger"]["trigger"] = projectSection.children[0]
    })

    gsap.from(projectSection.children[1], {
      ...animationProperties.current,
      ...animationProperties.current["scrollTrigger"]["trigger"] = projectSection.children[1]
    })

    gsap.from(projectSection.children[2], {
      ...animationProperties.current,
      ...animationProperties.current["scrollTrigger"]["trigger"] = projectSection.children[2]
    })
  },[animationProperties])

  // /* quote animations */

  useEffect(() => {
    let wrapper = document.querySelector("#quote-wrapper")
    var svg = document.querySelector("#quote-svg").getBoundingClientRect()
    var svgWidth = svg.width
    var bounds = wrapper.getBoundingClientRect().width / 2 - svgWidth + width - width
    var quoteSvg = "#quote-svg #container"

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#quote-wrapper",
        start: "100% 100%",
      },
      ease: "power2.out",
    })
    tl.to(`${quoteSvg} #left, ${quoteSvg} #right`, {
      x: gsap.utils.wrap([-bounds, bounds]),
      duration: 1.3,
    }).to(
      "#quote-text",
      {
        opacity: 1,
      },
      "0.3"
    )
  },[width])

  // /* contact animations */

  useEffect(() => {
    let contactSection = document.querySelector("#contact")

    gsap.from(contactSection, {
      autoAlpha: 0,
      duration: 1.3,
      scrollTrigger: {
        trigger: contactSection,
        start: "top 100%"
      }
    })
  },[])

  return null
}