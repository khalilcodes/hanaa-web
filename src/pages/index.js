import React from "react"

import {
  SEO as SeO,
  Banner,
  Works,
  Contact,
  Project,
  Quote,
  ProjectFullscreen,
  HomepageAnimations
} from '../components'

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