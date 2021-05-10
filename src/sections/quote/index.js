import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import { container, quoteWrapper, mainText, imageContainer } from "./quote.module.scss"

const Quote = () => {
  return (
    <div className={container}>
      <div className={quoteWrapper}>
        <h1 className={mainText}>
          design won't save the world but it damn sure makes it look good
        </h1>
        <div className={imageContainer}>
          <StaticImage
            src="../../images/quote/wave-quote.png"
            placeholder="blurred"
            layout="fullWidth"
            alt="quote-background"
          />
        </div>
      </div>
    </div>
  )
}

export default Quote
