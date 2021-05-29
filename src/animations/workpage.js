import { useEffect } from 'react'
import { gsap } from 'gsap'

const WorkpageAnims = () => {
    useEffect(() => {
        var section = document.querySelector("#work-section")
        var workTitle = section.children[0]
        var underline = section.children[1]

        gsap.set(underline, {
          width: workTitle.getBoundingClientRect().width + 30
        })

        var children = gsap.utils.toArray(section.children)
        var items = children.filter(item => item !== underline && item !== workTitle)

        const tl = gsap.timeline()

        tl.from(
          workTitle.firstChild,
          {
            y: workTitle.getBoundingClientRect().height,
            ease: "power4.out",
            duration: 1.5,
          },
        )
        .from(items, {
          autoAlpha: 0,
          duration: 2,
          stagger: 0.5,
        },"0.3")

        tl.delay(1)
    },[])
    return null
}

export default WorkpageAnims