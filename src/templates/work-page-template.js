import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { SEO as SeO, Section, WorkPageHeader } from '../components'
import { WorkpageAnimations } from '../animations'

import {
  container,
  returnLink,
  descriptionWrapper,
  imagesContainer,
  gatsbyImageWrapper,
  centerGridItem,
} from "./selected-work.module.scss"

const WorkPageTemplate = ({ data, location }) => {
  const {
    title,
    description: { description },
    images,
  } = data.contentfulWorks

  const browser = typeof window !== "undefined" && window
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  },[])

  const handleBackLink = () => {
    if (typeof window !== "undefined" && location) {
      navigate(
        location.state !== null ? -1 : "/#selected-works"
      )
    }
  }

  if (!hasMounted) return null
    
  return (
    browser &&
    <>
      <SeO title={title} />
      <WorkpageAnimations />
      <WorkPageHeader />
      <button
        onClick={handleBackLink}
        className={returnLink}
      >
        back to selected works
      </button>
      <Section heading={title} className={container}>
        <div className={descriptionWrapper}>
          <p>{description}</p>
        </div>
        <div className={imagesContainer}>
          {images.map(({ id, title, gatsbyImageData }) => (
            <GatsbyImage
              key={id}
              image={gatsbyImageData}
              alt={title}
              className={`${gatsbyImageWrapper} ${
                images.length % 2 !== 0 ? centerGridItem : ""
              }`}
            />
          ))}
        </div>
      </Section>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWorks(slug: { eq: $slug }) {
      title
      description {
        description
      }
      images {
        id
        title
        gatsbyImageData(
          aspectRatio: 1.6
          width: 720
          placeholder: BLURRED 
        )
      }
    }
  }
`

export default WorkPageTemplate