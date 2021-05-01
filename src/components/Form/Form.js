import React, { useState } from 'react'

import useForm from './useForm'
import FormValidation from './FormValidation'

import { TextField, Button } from "@material-ui/core"
import { StylesProvider, makeStyles } from '@material-ui/core/styles'

import { contactForm, dotsWrapper } from './form.module.scss'
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
    let contactFormName = "contact form v1.0"

    const [ status, setStatus ] = useState({
      message: null,
      color: ""
    })

    const handleSubmit = async () => {

      function clearSubmit() {
        setIsSubmiting(false)
        setTimeout(() => {
          setStatus({ ...status, message: null })
        }, 3000);
        setValues({})
      }

      function encode(data) {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&")
      }
      
      try {
        await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: encode({ "form-name": contactFormName, ...values })
        }).then(() => {
          setStatus({ color: "darkgreen", message: "Thank you! Your message has been sent." })
        }).finally(() => clearSubmit())
      } catch (err) {
        setStatus({ color: "darkred", message: "some error occurred." })
        clearSubmit()
      }
    }

    const { values, setValues, handleChange, onSubmit, errors, setIsSubmiting, isSubmitting } = useForm(handleSubmit, FormValidation)

    const classes = useStyles()

    return (
      <div className={contactForm}>
        <form
          encType="application/x-www-form-urlencoded"
          className={classes.root}
          id="contact-form"
          name={contactFormName}
          onSubmit={onSubmit}
          noValidate
          data-netlify={true}
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
            </Button>
            {status.message !== null && 
              <p 
                style={{
                  margin: 0,
                  fontSize: "small",
                  color: status.color
                }}
              >
                {status.message}
              </p>
            }
          </StylesProvider>
        </form>
      </div>
    )
}

export default Form