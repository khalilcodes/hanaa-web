import React from "react"
import Section from '../sections'
import { graphql, useStaticQuery } from "gatsby"

import DesktopView from './desktopView'
import MobileView from './mobileView'

import useWindowSize from '../../hooks/useWindowSize'
import { WebContext } from "../../hooks/context"

import {
  projectDescription,
  projectContainer,
  imageWrapper
} from "./project.module.scss"

const Project = ({ heading }) => {
  const {
    allContentfulUniProject: { nodes: images },
    projectDetails,
  } = useStaticQuery(graphql`
    query {
      allContentfulUniProject(sort: { fields: contentfulid, order: ASC }) {
        nodes {
          contentfulid
          id
          name
          coverImage {
            gatsbyImageData
          }
        }
      }
      projectDetails: contentfulUniProjectDetails {
        title
        project
        course
        major
        university
        year
      }
    }
  `)

  const { width } = useWindowSize()
  const breakpoint =  width < 1200

  const [{ isActive }, dispatch] = React.useContext(WebContext)

  const handleFullscreen = (i) => {
    dispatch({ type: "toggle_fullscreen", payload: !isActive })
    dispatch({ type: "set_index", payload: i })
  }

  let projectsView

  if (breakpoint) {
    projectsView = <MobileView images={images} onClick={handleFullscreen} />
  } else {
    projectsView = <DesktopView images={images} onClick={handleFullscreen} />
  }

  return (
    <Section heading={heading}>
      <div className={projectDescription}>
        {Object.keys(projectDetails).map(key => (
          <span key={key}>
            <b>{key}:</b>&nbsp;{projectDetails[key]}
          </span>
        ))}
      </div>
      <div className={projectContainer}>
        <div className={imageWrapper}>
          {projectsView}
        </div>
      </div>
    </Section>
  )
}

export default Project
