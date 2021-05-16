import React, { useEffect } from "react"
import QuoteSvg from '../../images/quote/quoteSvg'
import { gsap } from 'gsap'
import useWindowSize from '../../hooks/useWindowSize'

import { 
  container,
  quoteWrapper,
} from "./quote.module.scss"

const Quote = () => {
  const { width } = useWindowSize()

  useEffect(() => {
    let wrapper = document.querySelector("#quote-wrapper").getBoundingClientRect()
    var svg = document.querySelector("#quote-svg").getBoundingClientRect()
    var svgWidth = svg.width
    var bounds = (wrapper.width / 2) - svgWidth + width - width

    var quoteSvg = "#quote-svg #container"
    let tl = gsap.timeline()
    tl.to(`${quoteSvg} #left, ${quoteSvg} #right`, {
      x: gsap.utils.wrap([-bounds, bounds])
    })
  },[width])
  
  return (
    <div className={container}>
      <div className={quoteWrapper} id="quote-wrapper">
        <QuoteSvg id="quote-svg" />
        <h1 id="quote-text">
          DESIGN is where SCIENCE and ART break EVEN.
        </h1>
      </div>
    </div>
  )
}

export default Quote
