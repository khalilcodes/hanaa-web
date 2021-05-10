/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import React from 'react'
 import ContextProvider from './src/hooks/context'
 import gsap from 'gsap'

 export const wrapRootElement = ({ element }) => {
    if (typeof window === "undefined" && !window) return null
    return <ContextProvider>{element}</ContextProvider>
 }

 const transitionDelay = 1000

 export const onRouteUpdate = ({ location }) => {
   const { hash } = location
    console.log(hash)
   if (hash) {
     setTimeout(() => {
       gsap.to(window, {
         scrollTo : {
           y: hash,
           offsetY: 0
         },
       })
     }, transitionDelay);
   }
 }

 export const shouldUpdateScroll = ({
   routerProps: { location },
   getSavedScrollPosition,
 }) => {
     if (location.action === "PUSH") {
       window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
     } else {
       const savedPosition = getSavedScrollPosition(location)
       window.setTimeout(
         () => window.scrollTo(...(savedPosition || [0, 0])),
         transitionDelay
       )
     }
     
    return false
 }