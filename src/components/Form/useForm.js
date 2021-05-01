import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
    const [ values, setValues ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [ isSubmitting, setIsSubmiting] = useState(false)

    useEffect(() => {
        if( Object.keys(errors).length === 0 && isSubmitting ) {
            callback()
        } else {
            setIsSubmiting(false)
        }
    },[isSubmitting, errors, callback])

    const handleChange = (e) => {
        e.persist()
        setValues({...values, [e.target.name]: e.target.value })
    }
    const onSubmit = (event) => {
        if ( event ) event.preventDefault()
        setErrors(validate(values))
        setIsSubmiting(true)
    }
    return { values, setValues, handleChange, onSubmit, errors, setIsSubmiting, isSubmitting }
}

export default useForm