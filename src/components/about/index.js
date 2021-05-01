import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { aboutContainer } from './about.module.scss'

const About = () => {
    const {
      contentfulHome: { bio },
    } = useStaticQuery(graphql`
      query {
        contentfulHome {
          bio {
            raw
          }
        }
      }
    `)

    const aboutDescription = renderRichText(bio)

    return (
      <>
        <div className={aboutContainer}>
          <div className="about-text">
            {aboutDescription}
          </div>
        </div>
      </>
    )
}

export default About