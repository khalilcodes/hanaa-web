import React, { useEffect, useRef } from "react"
import { About } from '../../components'

import { bannerContainer, dividerLine, bannerTitle } from "./banner.module.scss"

const Banner = () => {
  let bannerRef = useRef(null)

  useEffect(() => {
    function handleHeight() {
      bannerRef.current.style.height = "100vh"
    }
    window.addEventListener('resize', () => handleHeight())
    handleHeight()
    return () => window.removeEventListener('resize', () => handleHeight())
  })

  return (
    <div ref={bannerRef} className={bannerContainer}>
      <div className={bannerTitle} id="banner-title">
        <span>INTERIOR DESIGNER</span>
      </div>
      <span className={dividerLine} />
      <About />
    </div>
  )
}

export default Banner