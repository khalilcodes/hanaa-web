export default function FormValidation(values) {
    let errors = {}

    if (!values.name) {
      errors.name = "required"
    }
    if (!values.email) {
      errors.email = "required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "email address is invalid"
    }
    if (!values.message) {
      errors.message = "required"
    }

    return errors
}