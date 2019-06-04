import React from 'react'
import styles from './Spinner.scss'
import PropTypes from 'prop-types'

Spinner.propTypes = {
  className: PropTypes.string
}

function Spinner({className}) {
  return (
    <div className={`${styles.componentSpinner} ${className}`}>
      <svg viewBox='0 0 44 44'>
        <circle cx='22' cy='22' r='20' fill='none' strokeWidth='4'/>
      </svg>
    </div>
  )
}

export default Spinner
