import React from "react"
import { About } from '../../components'

import { bannerContainer, dividerLine, bannerTitle } from "./banner.module.scss"

const Banner = () => {
  return (
    <>
      <div className={bannerContainer}>
        <div className={bannerTitle} id="banner-title">
          <span>INTERIOR DESIGNER</span>
        </div>
        <span className={dividerLine} />
        <About />
      </div>
    </>
  )
}

export default Banner