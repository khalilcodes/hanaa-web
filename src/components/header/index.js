import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Hamburger from './hamburger'
import NavigationLinks from './navigation'

import useWindowSize from '../../hooks/useWindowSize'
import { WebContext } from '../../hooks/context'

import { container, workPageHeader, titleStyles } from './header.module.scss'

export const WorkPageHeader = () => {
  return (
    <div className={workPageHeader}>
      <div className={titleStyles}>work</div>
      <span />
    </div>
  )
}

const Header = ({ siteTitle }) => {
  const [{ showMenu }, dispatch] = useContext(WebContext)
  const { width } = useWindowSize()
  let breakpoint = width < 968

  let nav

  const handleClose = e => {
    if (breakpoint && showMenu) {
      if (e) dispatch({ type: "toggle_menu", payload: !showMenu })
    }
  }

  if (breakpoint) {
    nav = <Hamburger breakpoint={breakpoint} />
  } else {
    nav = <NavigationLinks />
  }

  return (
    <header>
      <div className={container}>
        {/* Logo Name */}
        <div>
          <Link to="/" onClick={handleClose}>{siteTitle}</Link>
        </div>
        {/* navigation */}
        {nav}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
