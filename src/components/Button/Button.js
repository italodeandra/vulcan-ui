import React from 'react'
import styles from './Button.scss'
import PropTypes from 'prop-types'
import classNames from '../../helpers/classNames'

Button.propTypes = {
  type: PropTypes.string,
  submit: PropTypes.bool,
  setRef: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
}

function Button({type, submit, setRef, onClick, className, children}) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      ref={setRef}
      className={classNames(styles.componentButton, styles[type || 'contained'], className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
