import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { WebContext } from "../../hooks/context"

import { navDesktop, navMobile } from "./header.module.scss"

const NavigationLinks = ({ breakpoint }) => {
  const [{ showMenu }, dispatch] = useContext(WebContext)

  let navRef = useRef(null)

  useEffect(() => {
    let navLinks = gsap.utils.toArray(navRef.current.children)

    function handleClick(e) {
      if (typeof window !== "undefined") {
        if (breakpoint && showMenu)
          dispatch({ type: "toggle_menu", payload: !showMenu })

        if (e.target.hash) {
          if (window.location.pathname === "/") {
            if (e) e.preventDefault()
            gsap.to(window, {
              scrollTo: {
                y: e.target.hash,
                offsetY: 0,
              },
              ease: "power4",
              duration: 2.5
            })
          }
        }
      }
    }

    navLinks.forEach(link => {
      link.addEventListener("click", handleClick)
      return () => link.removeEventListener("click", handleClick)
    })
  }, [breakpoint, showMenu, dispatch])

  return (
    <div className={breakpoint ? navMobile : navDesktop} ref={navRef}>
      <a
        href={process.env.GATSBY_GDOCS_PDF}
        target="_blank"
        rel="noreferrer noopener"
      >
        my resume
      </a>
      <Link to="/#contact">contact</Link>
    </div>
  )
}

export default NavigationLinks
