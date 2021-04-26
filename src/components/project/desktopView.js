import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { GatsbyImage } from 'gatsby-plugin-image'

import { stylesImage, fluid } from './project.module.scss'

const DesktopView = ({ images, onClick }) => {
  let imageEl = useRef([])

  const animate = (index, width) => {
    gsap.to(imageEl.current[index].firstChild, {
      borderWidth: width,
      duration: 0.1,
    })
  }

  const handleMouseOver = i => animate(i, 5)
  const handleMouseLeave = i => animate(i, 2)

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
    >
      <GatsbyImage className={fluid} image={gatsbyImageData} alt={name} />
      <span>{name}</span>
    </div>
  ))
}

export default DesktopView