import { useEffect } from 'react'
import { gsap } from 'gsap'

const WorkpageAnims = () => {
    useEffect(() => {
        var section = document.getElementsByClassName('animate-section-wrapper')
        var workTitle = ".animate-section-wrapper h1"
        var description = ".animate-section-wrapper p"
        var images = section[0].lastChild

        const tl = gsap.timeline()
        
        tl.from(workTitle, {
          opacity: 0,
          duration: 0.3,
        }).from(workTitle, {
          y: 50,
          duration: 1,
          delay: 0.3,
          ease: "power4.out",
        }).from(description, {
            y: 100,
            duration: 1.8,
            skewY: 7,
            ease: "power4.out",
        },"0.1").from(images, {
            opacity: 0,
        },"1")
    },[])
    return null
}

export default WorkpageAnims