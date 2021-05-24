import React from 'react'
import Slider from "react-slick"

import { GatsbyImage } from 'gatsby-plugin-image'
import { stylesImage, fluid, slider } from "./project.module.scss"

const sliderSettings = {
  className: `${slider}`,
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  dots: false,
  centerPadding: "120px",
  responsive: [
    {
      breakpoint: 512,
      settings: {
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 375,
      settings: {
        centerPadding: "35px",
      },
    },
  ],
}

const MobileView = ({ images, onClick }) => {
  return (
    <Slider {...sliderSettings}>
        {images.map(({ id, name, coverImage: { gatsbyImageData } }, i) => (
          <div
            key={id}
            className={stylesImage}
            onClick={() => onClick(i)}
            onKeyDown={() => onClick(i)}
            onDragStart={e => e.preventDefault()}
            role="button"
            tabIndex="0"
          >
            <GatsbyImage className={fluid} image={gatsbyImageData} alt={name} />
            <span>{name}</span>
          </div>
        ))}
    </Slider>
  )
}

export default MobileView