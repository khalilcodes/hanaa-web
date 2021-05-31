import React, { useCallback, useEffect, useMemo, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Section } from '../../components'
import DesktopView from './desktopView'
import MobileView from './mobileView'

import { WebContext } from "../../hooks/context"
import { useMediaQuery } from '@material-ui/core'

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

  const matches = useMediaQuery("(min-width: 1200px)")

  const [{ isActive }, dispatch] = React.useContext(WebContext)

  const handleFullscreen = useCallback((i) => {
    dispatch({ type: "toggle_fullscreen", payload: !isActive })
    dispatch({ type: "set_index", payload: i })
  },[dispatch, isActive])

  let mobileView = useMemo(() => {
    return <MobileView images={images} onClick={handleFullscreen} />
  },[handleFullscreen, images])
  
  let desktopView = useMemo(() => {
    return <DesktopView images={images} onClick={handleFullscreen} />
  },[handleFullscreen, images])

  const [projectView, setProjectView] = useState(null)

  useEffect(() => {
    let _isMounted = true

    if (_isMounted && matches) setProjectView(desktopView)
    if (_isMounted && !matches) setProjectView(mobileView)

    return () => _isMounted = false
  },[matches, desktopView, mobileView])

  return (
    <Section heading={heading} id="uni-project">
      <div className={projectDescription}>
        {Object.keys(projectDetails).map(key => (
          <span key={key}>
            <b>{key}:</b>&nbsp;{projectDetails[key]}
          </span>
        ))}
      </div>
      <div className={projectContainer}>
        <div className={imageWrapper}>
            {projectView}
        </div>
      </div>
    </Section>
  )
}

export default Project
