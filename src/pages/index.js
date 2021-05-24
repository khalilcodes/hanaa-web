import React, { useEffect } from "react"

import { SEO as SeO, ProjectFullscreen } from '../components'
import { Banner, Works, Project, Quote, Contact } from '../sections'
import { HomepageAnimations } from '../animations'

const Index = () => {

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const currentUrl = window.location.href
      const newUrl = currentUrl.split("#")[0]
      window.history.replaceState("", "/", newUrl)
    }
  },[])

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