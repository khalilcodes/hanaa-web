import React from "react"

import { SEO as SeO, ProjectFullscreen } from '../components'
import { Banner, Works, Project, Quote, Contact } from '../sections'
import { HomepageAnimations } from '../animations'

const Index = () => {
  return (
    <>
      <HomepageAnimations />
      <SeO title="Home" />
      <Banner />
      <Works heading="selected works" />
      <Project heading="university project" />
      <Quote />
      <Contact heading="get in touch" />
      <ProjectFullscreen />
    </>
  )
}

export default Index