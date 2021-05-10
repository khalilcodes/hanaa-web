import React, { useRef, useState, useEffect } from 'react'
import { graphql, useStaticQuery } from "gatsby"

import { Section, Grid, Form } from '../../components'
import { gsap } from 'gsap'

import {
    container,
    grid,
    contactContainer,
    formContainer,
    contactInfo,
    contactInfoLinks,
    hoverImageStyle
} from './contact.module.scss'

import flag from "../../images/contact/flag-bh.svg"
import email from "../../images/contact/bg-email.svg"

const HoverLink = props => {
  const { url, text } = props
  return (
    <span {...props} role="link" tabIndex="0">
      <a href={url} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </span>
  )
}

const Contact = ({ heading }) => {
  const {
    contentfulGlobal: { contactEmail },
  } = useStaticQuery(graphql`
    query {
      contentfulGlobal {
        contactEmail
      }
    }
  `)

  let hoverImage = useRef()

  const [image, setImage] = useState(null)
  const [animation] = useState(gsap.timeline({ paused: true }))

  const position = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }}
    }, 
    []
  )

  useEffect(() => {
    const mouse = { x: position.x, y: position.y }

    let imageElement = hoverImage
    animation.to(imageElement.current, {
      opacity: 0.5,
      duration: 0.3,
      ease: "none",
    })

    gsap.set(hoverImage.current, {
      xPercent: -50,
      yPercent: -50,
    })

    const xSet = gsap.quickSetter(hoverImage.current, "x", "px")
    const ySet = gsap.quickSetter(hoverImage.current, "y", "px")

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio())
      position.x += (mouse.x - position.x) * dt
      position.y += (mouse.y - position.y) * dt
      xSet(position.x)
      ySet(position.y)
    })

    const handleMousemove = e => {
      mouse.x = e.x
      mouse.y = e.y
    }

    window.addEventListener("mousemove", e => handleMousemove(e))
    return () =>
      window.removeEventListener("mousemove", e => handleMousemove(e))
  }, [animation, hoverImage, position])

  const handleEnter = imgSrc => {
    if (image) {
      animation.reverse().then(() => {
        setImage(imgSrc)
        animation.play()
      })
    } else {
      setImage(imgSrc)
      animation.play()
    }
  }

  const handleLeave = () => {
    animation.reverse().then(() => setImage(null))
  }

  return (
    <Section heading={heading} className={container} id="contact">
      <Grid isVertical={false} customStyle={grid} />
      <div className={contactContainer}>
        <div className={formContainer}>
          <Form />
        </div>
        <div className={contactInfo}>
          <div className={contactInfoLinks}>
            <HoverLink
              text={contactEmail}
              url={`mailto:${contactEmail}`}
              onMouseEnter={() => handleEnter(email)}
              onMouseLeave={handleLeave}
            />
            <HoverLink
              text="Kingdom of Bahrain"
              url="https://en.wikipedia.org/wiki/Bahrain"
              onMouseEnter={() => handleEnter(flag)}
              onMouseLeave={handleLeave}
            />
          </div>
          <div className={hoverImageStyle}>
            <img src={image} ref={hoverImage} alt="background" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact