import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { GatsbyImage } from "gatsby-plugin-image"
import { SEO as SeO } from "../components"
import { WorkPageHeader } from '../components/header'
import Section from '../components/sections'
import { WorkPageAnimations } from '../components'

import {
  container,
  returnLink,
  descriptionWrapper,
  imagesContainer,
  gatsbyImageWrapper,
  centerGridItem,
} from "./selected-work.module.scss"

const WorkPageTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    images,
  } = data.contentfulWorks
    
  return (
    <>
      <SeO title={title} />
      <WorkPageAnimations />
      <WorkPageHeader />
      <button
        onClick={() => navigate(-1, { replace: true })}
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