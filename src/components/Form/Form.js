import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import styles from './Form.scss'

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  setRef: PropTypes.object
}

function Form({onSubmit, children, setRef}) {
  const formRef = setRef || useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    const fields = formRef.current.querySelectorAll('[tabIndex]')
    fields.forEach(field => field.focus())
    formRef.current.focus()

    const fieldWithError = Array.prototype.find.call(fields, field => field.classList.contains('error-focus'))
    if (fieldWithError) {
      fieldWithError.focus()
      return
    }

    onSubmit && onSubmit()
  }

  return (
    <form
      className={styles.componentForm}
      onSubmit={handleSubmit}
      ref={formRef}
      tabIndex='0'
    >
      {children}
    </form>
  )
}

export default Form
