import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { aboutContainer } from './about.module.scss'

const About = () => {
    const { contentfulHome: {
      bio: { bio }
    }} = useStaticQuery(graphql`
      query {
        contentfulHome {
          bio {
            bio
          }
        }
      }
    `)

    return (
      <>
        <div className={aboutContainer}>
          <div className="about-text">
            {bio}
          </div>
        </div>
      </>
    )
}

export default About