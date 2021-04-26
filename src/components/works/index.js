import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../sections'
import WorkItem from './workItem'

import {
  workList,
} from "./work.module.scss"


const Works = ({ heading }) => {
  const {
    allContentfulWorks: { nodes: works },
  } = useStaticQuery(graphql`
    query {
      allContentfulWorks(sort: { order: ASC, fields: contentfulid }) {
        nodes {
          contentfulid
          slug
          title
          id
        }
      }
    }
  `)

  return (
      <Section heading={heading}>
        <div className={workList}>
          {works.map(({ id, title, slug }, i) => (
            <WorkItem 
              key={id}
              link={`selected-works/${slug}`}
              title={title} index={i}
            />
          ))}
        </div>
      </Section>
  )
}

export default Works