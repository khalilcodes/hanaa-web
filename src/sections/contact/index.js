import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import { Section, Grid, Form, ContactInfo } from '../../components'

import {
    container,
    grid,
    contactContainer
} from './contact.module.scss'

const Contact = ({ heading }) => {
  const {
    contentfulGlobal: { contactEmail },
  } = useStaticQuery(graphql`
    query {
      contentfulGlobal {
        contactEmail
      }
    }
  `)

  return (
    <Section heading={heading} className={container} id="contact">
      <Grid isVertical={false} customStyle={grid} />
      <div className={contactContainer}>
        <Form />
        <ContactInfo contactEmail={contactEmail} />
      </div>
    </Section>
  )
}

export default Contact