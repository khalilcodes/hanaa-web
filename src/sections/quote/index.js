import React from "react"
import QuoteSvg from '../../images/quote/quoteSvg'

import { 
  container,
  quoteWrapper,
} from "./quote.module.scss"

const Quote = () => {
  return (
    <div className={container}>
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
