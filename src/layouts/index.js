/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Footer, Grid } from '../components'
import { PageTransitions } from '../animations'
// import SmoothScroll from './smoothscroll/smoothscroll'

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
