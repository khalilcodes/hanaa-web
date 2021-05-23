import React from 'react'

import {
    container,
    titleStyle
} from './section.module.scss'

const Section = (props) => {
    const { heading, children, className } = props
    return (
        <div {...props} className={`${container} ${className}`}>
            {
                heading &&
                <div className={titleStyle} style={{ overflow: "hidden"}}>
                    <h1>{heading}</h1>
                </div>
            }
            {children}
        </div>
    )
}

export default Section