import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { WebContext } from '../../hooks/context'
import { useMediaQuery } from '@material-ui/core'

import { 
  fullScreen,
  fullscreenContainer,
  fullScreenImage,
  imageActive,
  button,
  closeButton,
  arrowLeft,
  arrowRight
} from './fullscreen.module.scss'

export const ButtonComponent = (props) => {
  return (
    <div
      {...props}
      className={`${button} ${props.className}`}
      onKeyDown={props.onClick}
      tabIndex="0"
      role="button"
    >
      <span />
    </div>
  )
}

const ProjectFullscreen = () => {
  const {
    allContentfulUniProject: { nodes: images },
  } = useStaticQuery(graphql`
    query {
      allContentfulUniProject(sort: { fields: contentfulid, order: ASC }) {
        nodes {
          contentfulid
          id
          name
          fullscreenImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)
    
  const matches = useMediaQuery("(min-width: 1200px)")

  const [{ isActive, index }, dispatch] = React.useContext(WebContext)

  React.useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "scroll"
  })

  function handleClick() {
    dispatch({ type: "toggle_fullscreen", payload: !isActive })
  }

  const setIndex = (event, currentIndex, resetIndex, newIndex) => {
    event.stopPropagation()

    index === currentIndex
      ? dispatch({ type: "set_index", payload: resetIndex })
      : dispatch({ type: "set_index", payload: newIndex })
  }

  const handleNext = e => {
      setIndex(e, images.length - 1, 0, index + 1)
  }

  const handlePrev = e => {
      setIndex(e, 0, images.length - 1, index - 1)
  }

  if (!isActive) return null

  return (
    <div
      className={fullScreen}
      style={{ display: isActive ? "block" : "none" }}
    >
      <div
        className={fullscreenContainer}
        onClick={matches ? handleClick : null}
        onKeyDown={matches ? handleClick : null}
        role="button"
        tabIndex="0"
      >
        {images.map(
          ({ id, name, fullscreenImage: { gatsbyImageData } }, i) => (
            <div
              key={id}
              className={`
              ${fullScreenImage} 
              ${index === i ? imageActive : ""}
            `}
            >
              <GatsbyImage image={gatsbyImageData} alt={name} />
            </div>
          )
        )}
        <ButtonComponent className={closeButton} onClick={handleClick} />
        <ButtonComponent className={arrowLeft} onClick={handlePrev} />
        <ButtonComponent className={arrowRight} onClick={handleNext} />
      </div>
    </div>
  )
}

export default ProjectFullscreen