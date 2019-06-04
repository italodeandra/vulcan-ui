import React, { useEffect, useRef, useState } from 'react'
import styles from './TextField.scss'
import validate from './validate'
import PropTypes from 'prop-types'
import classNames from '../../helpers/classNames'

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf('text', 'submit'),
  id: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  validation: PropTypes.object,
  tip: PropTypes.string,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  name: PropTypes.string,
  onCustomError: PropTypes.object,
  style: PropTypes.oneOf('filled', 'outlined')
}

function TextField({ label, type, id, onChange, autoComplete, autoFocus, disabled, validation, tip, defaultValue, placeholder, required, setRef, name, onCustomError, style }) {
  type = type || 'text'
  style = style || 'filled'
  const [value, setValue] = useState(defaultValue)
  const [isFocused, setFocused] = useState(false)
  const [isFilled, setFilled] = useState(false)
  const [isPristine, setPristine] = useState(true)
  if (required && (!validation || !validation.required)) {
    validation = validation || {}
    validation.required = 'Please fill out this field'
  }
  const [{ errorMessage, floatRightMessage }, setErrorMessage] = useState({})
  const isRequired = validation && validation.required
  const ref = setRef || useRef(null)

  /** Check error */
  useEffect(() => {
    setErrorMessage(validate(value, type, validation))
  }, [value, type, JSON.stringify(validation)])

  /** Check default value change */
  useEffect(() => {
    if (value !== defaultValue) {
      setPristine(false)

      setValue(defaultValue)
    }
  }, [JSON.stringify(defaultValue)])

  /** Check is filled */
  useEffect(() => {
    if (checkIsFilled(value)) {
      setFilled(true)
    } else {
      setFilled(false)
    }
  }, [JSON.stringify(value)])

  /** Init custom error */
  useEffect(() => {
    if (onCustomError) {
      onCustomError.current = {
        set: (error) => {
          setErrorMessage(error)
          setPristine(false)
        }
      }
    }
  }, [onCustomError])

  function checkIsFilled(value) {
    return typeof value !== 'undefined' && value !== '' && value !== null
  }

  function handleInputChange(newValue) {
    setPristine(false)

    setValue(newValue)
    onChange && onChange(newValue)
  }

  function handleFocus(focused) {
    setFocused(focused)
    if (!focused) {
      setPristine(false)
    }
  }

  function checkAutofill({ target }) {
    if (target.matches(':-webkit-autofill') && isPristine && !isFilled) {
      setFilled(true)
    }
  }

  return (
    <div
      className={
        classNames(
          styles.componentTextField,
          isFocused && styles.focused,
          isFilled && styles.filled,
          isPristine && styles.pristine,
          isRequired && styles.required,
          errorMessage && styles.error,
          styles[style]
        )
      }
    >
      <input
        ref={ref}
        tabIndex='0'
        className={errorMessage ? 'error-focus' : ''}
        id={id}
        type={type}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={$event => handleInputChange($event.target.value)}
        autoComplete={autoComplete || 'off'}
        autoFocus={autoFocus}
        disabled={disabled}
        required={isRequired}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        onTransitionEnd={checkAutofill}
      />
      {!!label &&
      <label htmlFor={id}>
        {label}
      </label>
      }
      {(tip || (!isPristine && !!errorMessage)) &&
      <div className={styles.tip}>
        {(!isPristine && errorMessage) ? errorMessage : tip}
        {!!floatRightMessage &&
        <span className={styles.floatRight}>{floatRightMessage}</span>
        }
      </div>
      }
    </div>
  )
}

export default TextField
