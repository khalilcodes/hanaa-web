import { useEffect } from "react"
import { gsap } from "gsap"

const IndexpageAnims = () => {
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

    tl.delay(0.8)
  }, [])

  return null
}

export default IndexpageAnims