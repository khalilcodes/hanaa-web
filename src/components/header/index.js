import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Hamburger from './hamburger'
import NavigationLinks from './navigation'

import { WebContext } from '../../hooks/context'
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
  const matches = useMediaQuery("(min-width: 968px)")

  let nav

  if (!matches) {
    nav = <Hamburger breakpoint={!matches} />
  } else {
    nav = <NavigationLinks />
  }

  const handleClose = e => {
    if (!matches && showMenu) {
      if (e) dispatch({ type: "toggle_menu", payload: !showMenu })
    }
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
