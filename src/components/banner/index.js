import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import About from '../about'

import { bannerContainer, heroImage, bannerTitle } from "./banner.module.scss"

const Banner = () => {
  return (
    <>
      <div className={bannerContainer}>
        <div className={heroImage}>
          <StaticImage
            src="../../images/hero/banner-bg.png"
            placeholder="blurred"
            layout="fullWidth"
            alt="banner-background"
          />
        </div>
        <div className={`${bannerTitle} animate-banner-title`}>
          <span>INTERIOR</span>
          <span>DESIGNER</span>
        </div>
        <About />
      </div>
    </>
  )
}

export default Banner