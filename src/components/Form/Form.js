import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'

// import { useStaticQuery, graphql } from 'gatsby'

import useForm from './useForm'
import FormValidation from './FormValidation'

import { TextField, Button } from "@material-ui/core"
import { StylesProvider, makeStyles } from '@material-ui/core/styles'

import { contactForm, dotsWrapper, messageStyle } from './form.module.scss'
import './form.module.scss'

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0 ,0 , 0.54);",
    },
    "& .MuiFormHelperText-root": {
      position: 'absolute',
      bottom: "-20px"
    }
  },
}))

const Form = () => {
    // const { data } = useStaticQuery(graphql`
    //   query {
    //     data: strapiGlobal {
    //       contactEmail
    //     }
    //   }
    // `)

    const [ statusMessage, setStatusMessage ] = useState(null)
    let statusMessageRef = useRef()
    const [ tl ] = useState(gsap.timeline())

    const handleSubmit = () => {
      setStatusMessage("test message")
      setTimeout(() => {
        setIsSubmiting(false)
        setStatusMessage(null)
      }, 3000)
      // const form = document.getElementById('contact-form')
      // const data = new FormData(form)

      // try {
      //   await fetch(
      //     "https://kwes.io/api/foreign/forms/hQe0LBouiTQIBgOajzXv",
      //     // "https://formsubmit.co/ajax/d1b8bc57fbe900df643cff6a2a124d9e",
      //     {
      //       method: "POST",
      //     //   mode: "no-cors",
      //     //   body: data,
      //     }
      //   ).then(res => {
      //     console.log(res)
      //     setIsSubmiting(false)
      //     if (res.status < 300) {
      //       setMessage("Your message has been sent! Thank you.")
      //     } else {
      //       setMessage("Sorry, an error has occured.")
      //     }

      //     setTimeout(() => {
      //       setMessage(null)
      //     }, 5000)
      //   })
      // } catch(error) {
      //   setMessage(error.message)
      // }
    }

    useEffect(() => {
      tl.to(statusMessageRef, {
        opacity: 1,
        y: 20
      })
    },[])

    useEffect(() => {
      tl.reversed(statusMessage === null)
    },[statusMessage])

    const { values, handleChange, onSubmit, errors, setIsSubmiting, isSubmitting } = useForm(handleSubmit, FormValidation)

    const classes = useStyles()

    return (
      <div className={contactForm}>
        <form
          className={`${classes.root} kwes-form`}
          id="contact-form"
          onSubmit={onSubmit}
          noValidate
        >
          <StylesProvider injectFirst>
            <TextField
              label="Name"
              name="name"
              value={values.name || ""}
              helperText={errors.name && errors.name}
              onChange={handleChange}
              autoComplete="none"
            />
            <TextField
              label="Email"
              name="email"
              value={values.email || ""}
              helperText={errors.email && errors.email}
              onChange={handleChange}
              autoComplete="none"
            />
            <TextField
              label="Message"
              name="message"
              multiline
              value={values.message || ""}
              helperText={errors.message && errors.message}
              onChange={handleChange}
              autoComplete="none"
            />
            <Button variant="outlined" type="submit" disabled={isSubmitting}>
              <span style={{ opacity: isSubmitting ? "0" : "1" }}>Submit</span>
              {isSubmitting && (
                <span className={dotsWrapper}>
                  <div />
                </span>
              )}
              <span className={messageStyle} ref={el => (statusMessageRef = el)}>
                {statusMessage}
              </span>
            </Button>
          </StylesProvider>
        </form>
      </div>
    )
}

export default Form