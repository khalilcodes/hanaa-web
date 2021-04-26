import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "../grid"
import { socialLinksContainer, socialLinks } from "./footer.module.scss"

const LinkComponent = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={className}
      target="blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  )
}

const Footer = () => {
  const {
      allContentfulSocialNetworks: { nodes: socialNetworks },
  } = useStaticQuery(graphql`
    query {
      allContentfulSocialNetworks {
        nodes {
          id
          title
          url
        }
      }
    }
  `)

  return (
    <footer>
      <Grid isVertical={false} />
      <div className={socialLinksContainer}>
        {socialNetworks.map(({ id, title, url }) => (
          <LinkComponent className={socialLinks} key={id} href={url}>
            {title}
          </LinkComponent>
        ))}
        <span>
          Developed by{" "}
          <LinkComponent href="https://linkedin.com/in/khalil-ali">
            Khalil Ali
          </LinkComponent>{" "}
          &copy;
        </span>
      </div>
    </footer>
  )
}

export default Footer
