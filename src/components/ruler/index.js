import React from "react"

import { stylesRight, container, ruler, measure } from "./ruler.module.scss"

const Ruler = ({ right }) => {
  const position = right ? stylesRight : ""
  return (
    <div className={`${container} ${position}`}>
      <div className={ruler}>
        <div className={measure} />
      </div>
    </div>
  )
}

export default Ruler
