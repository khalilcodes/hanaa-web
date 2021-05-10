import { useEffect } from "react"
import { gsap } from "gsap"

const IndexpageAnims = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".animate-banner-title", {
      opacity: 1,
      duration: 0.1,
    },"0.1")
      .from(".animate-banner-title span", {
        y: 70,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.3,
        // skewY: 3,
        stagger: {
          amount: 0.2,
        },
      })
      .to(".about-text", {
        opacity: 1,
        delay: -1.2,
      })
      .from(".about-text", {
        y: 100,
        duration: 1.8,
        ease: "power4.out",
        delay: -1.2,
        skewY: 7,
      })
  }, [])

  return null
}

export default IndexpageAnims