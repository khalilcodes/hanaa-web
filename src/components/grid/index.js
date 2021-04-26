import React from "react"

import Ruler from "../ruler"
import Logo from '../logo'

import useWindowSize from '../../hooks/useWindowSize'

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
  const { width } = useWindowSize()
  let breakpoint = width < 1024

  const alignment = isVertical ? vertical : horizontal

  if (breakpoint && isVertical) return null

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
