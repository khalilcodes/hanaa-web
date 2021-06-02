import React, { useEffect, useRef } from "react"
import QuoteSvg from '../../images/quote/quoteSvg'
import { gsap } from 'gsap'

import { 
  container,
  quoteWrapper,
} from "./quote.module.scss"

const Quote = () => {
  let quoteRef = useRef(null)

  useEffect(() => {
    let quote = quoteRef.current
    
    gsap.set(quote, {
      css: {
        height: quote.getBoundingClientRect().height
      }
    })
  })

  return (
    <div ref={quoteRef} className={container}>
      <div className={quoteWrapper} id="quote-wrapper">
        <QuoteSvg id="quote-svg" />
        <h1 id="quote-text">
          design is where science and art break even.
        </h1>
      </div>
    </div>
  )
}

export default Quote
