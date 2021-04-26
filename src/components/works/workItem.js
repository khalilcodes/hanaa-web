import React from 'react'
import { Link } from 'gatsby'

import {
    workItems,
    workTitle,
    number
} from './work.module.scss'

const WorkItem = (props) => {
  const { link, title, index } = props
  return (
    <Link {...props} to={link} className={workItems}>
      <div className={workTitle}>{title}</div>
      <span className={number}>{("00" + (index + 1)).substr(-2)}</span>
    </Link>
  )
}

export default WorkItem