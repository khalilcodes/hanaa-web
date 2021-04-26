/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import ContextProvider from './src/hooks/context'

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}