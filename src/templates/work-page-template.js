import React from "react"
import { graphql, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { SEO as SeO, Section, WorkPageHeader } from '../components'
import { WorkpageAnimations } from '../animations'

import {
  container,
  returnLink,
  line,
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

  const matches = useMediaQuery("(min-width: 968px)")
    
  return (
    <>
      <SeO title={title} />
      <WorkpageAnimations />
      <WorkPageHeader />
      <button
        onClick={() => navigate("/#selected-works")}
        className={returnLink}
      >
        back to selected works
      </button>
      <Section heading={title} className={container} id="work-section">
        <span className={line} />
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
                matches && images.length % 2 !== 0 ? centerGridItem : ""
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