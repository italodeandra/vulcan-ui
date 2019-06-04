import React from 'react'
import styles from './FloatingActionButton.scss'
import PropTypes from 'prop-types'
import classNames from '../../helpers/classNames'

FloatingActionButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  extended: PropTypes.bool,
  className: PropTypes.string
}

function FloatingActionButton({onClick, children, extended, className}) {
  return (
    <button
      type='button'
      className={classNames(styles.componentFloatingActionButton, (extended && styles.extended), className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FloatingActionButton
