import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { GatsbyImage } from 'gatsby-plugin-image'

import { stylesImage, fluid, backgroundWrapper } from './project.module.scss'

const DesktopView = ({ images, onClick }) => {
  let imageEl = useRef([])

  const animate = (index,state) => {
    const background = imageEl.current[index].firstChild
      gsap.to(background, {
        opacity: state === "mouseOver" ? 1 : 0,
      })
  }

  const handleMouseOver = i => {
    animate(i, "mouseOver")
  } 
  const handleMouseLeave = i => {
    animate(i, "mouseLeave")
  }

  return images.map(({ id, name, coverImage: { gatsbyImageData }}, i) => (
    <div
      key={id}
      ref={el => imageEl.current[i] = el}
      className={stylesImage} 
      onClick={() => onClick(i)}
      onKeyDown={() => onClick(i)}
      onMouseOver={() => handleMouseOver(i)}
      onFocus={() => handleMouseOver(i)}
      onMouseLeave={() => handleMouseLeave(i)}
      role="button"
      tabIndex="0"
      data-name={name}
    >
      <span className={backgroundWrapper} />
      <GatsbyImage className={fluid} image={gatsbyImageData} alt={name} />
    </div>
  ))
}

export default DesktopView