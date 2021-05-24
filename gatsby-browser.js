/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import React from 'react'
 import ContextProvider from './src/hooks/context'
 import gsap from 'gsap'
 import { useMediaQuery } from '@material-ui/core'

 export const wrapRootElement = ({ element }) => {
    if (typeof window === "undefined" && !window) return null
    return <ContextProvider>{element}</ContextProvider>
 }

 const TransitionDelay = () => {
   const matches = useMediaQuery("(min-width: 1024px)")
    return matches ? true: false
 }

 let transitionDelay = TransitionDelay ? 2000 : 1000

 export const onRouteUpdate = ({ location }) => {
   const { hash } = location
  
   if (hash) {
     setTimeout(() => {
       gsap.to(window, {
         scrollTo : {
           y: hash,
           offsetY: 0
         },
       })
     }, 1000);
   }
 }

 export const shouldUpdateScroll = ({
   routerProps: { location },
   getSavedScrollPosition,
 }) => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

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