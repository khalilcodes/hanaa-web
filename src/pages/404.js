import React, { useRef, useEffect } from "react"
import { SEO as SeO } from "../components"
import { StaticImage } from 'gatsby-plugin-image'
import gsap from "gsap/gsap-core"

import {
  container,
  gridWrapper,
  fourZeroFour,
  textContent,
  description,
} from "../styles/404.module.scss"

const NotFoundPage = () => {
  let textRef = useRef(null)
  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 2
    })
  },[])

  const browser = typeof window !== "undefined" && window

  return (
    browser &&
    <>
      <SeO title="404: Not found" />
      <div className={container}>
        <div className={gridWrapper}>
          <div className={textContent} ref={textRef}>
            <div className={fourZeroFour}>404</div>
            <span className={description}>
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
