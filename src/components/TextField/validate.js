function validate(value, type, validation) {
  let message = {
    errorMessage: null,
    floatRightMessage: null
  }

  if (validation) {
    if (validation.required) {
      if (typeof value === 'undefined' || value === '' || value === null) {
        message.errorMessage = validation.required.message || validation.required
        return message
      }
    }

    if (value && validation.maxLength) {
      if (value.length > validation.maxLength.value) {
        message.errorMessage = validation.maxLength.message
        message.floatRightMessage = validation.maxLength.floatRight
        return message
      }
    }
  }

  return message
}

export default validate
