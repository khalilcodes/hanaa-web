import React, { useRef, useEffect, useState } from "react"
import { SEO as SeO } from "../components"
import { StaticImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'

import {
  container,
  gridWrapper,
  fourZeroFour,
  textContent,
  description,
} from "../styles/404.module.scss"

gsap.registerPlugin()

const NotFoundPage = () => {
  let numberRef = useRef()
  let spanRef = useRef()

  const [tl] = useState(gsap.timeline())

  useEffect(() => {
    var originalText = numberRef.current.textContent
    var splitText = numberRef.current.textContent.split("")
    numberRef.current.textContent = ""

    const elems = splitText.map(char => {
      var newElem = document.createElement("span")
      newElem.innerText = char
      return numberRef.current.appendChild(newElem)
    })

    var targets = gsap.utils.toArray(elems)

    tl.from(targets[1], {
      autoAlpha: 0, delay: 1
    }).from([targets[0], targets[2]], {
      x: gsap.utils.wrap(["100%", "-110%"]),
      duration: 1,
      delay: 0.5,
      onComplete: () => numberRef.current.textContent = originalText
    }, "0.1")
  },[tl])

  return (
    <>
      <SeO title="404: Not found" />
      <div className={container}>
        <div className={gridWrapper}>
          <div className={textContent}>
            <div ref={numberRef} className={fourZeroFour}>404</div>
            <span className={description} ref={spanRef}>
              Sorry... the page you were looking for could not be found.
            </span>
          </div>
          <StaticImage 
            src="../images/404/blank_canvas.png"
            alt="blank canvas"
            placeholder="blurred"
            width={500}
          />
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
