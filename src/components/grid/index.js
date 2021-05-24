import React from "react"

import Ruler from "../ruler"
import Logo from '../logo'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import { grid, col, lines, vertical, horizontal } from "./grid.module.scss"

const SpanLines = ({ children }) => {
  return (
    <>
      <div className={col}>
        {children}
        {[...Array(2)].map((_, i) => (
          <span key={i} className={lines} />
        ))}
      </div>
    </>
  )
}

const Grid = ({ isVertical, customStyle, id }) => {
  const matches = useMediaQuery("(min-width: 1024px)")
  const alignment = isVertical ? vertical : horizontal

  if (!matches && isVertical) return null

  return (
    <div id={id} className={`${grid} ${alignment} ${customStyle}`}>
      <SpanLines>
        {isVertical && (
          <>
            <Ruler />
            <Logo />
          </>
        )}
      </SpanLines>
      {isVertical && (
        <SpanLines>
          <Ruler right />
          <Logo bottom />
        </SpanLines>
      )}
    </div>
  )
}

export default Grid
