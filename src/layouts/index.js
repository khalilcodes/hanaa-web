/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Footer, Grid } from '../components'
import { PageTransitions } from '../animations'
// import SmoothScroll from './smoothscroll/smoothscroll'
import useWindowSize from "../hooks/useWindowSize"

import './layout.scss'

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { height } = useWindowSize()

  useEffect(() => {
      var header = document.querySelector("header").getBoundingClientRect().height
      var footer = document.querySelector("footer")
      var bottomCredits = footer.lastChild.lastChild.getBoundingClientRect().height
      let vh = (height * 0.01)
  
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      document.documentElement.style.setProperty('--header', `${header}px`)
      document.documentElement.style.setProperty('--footer', `${bottomCredits}px`)
  },[height])

  return (
    <PageTransitions location={location}>
      <Grid id="grid" isVertical={true} />
      {/* <SmoothScroll> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      {/* </SmoothScroll> */}
    </PageTransitions>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
