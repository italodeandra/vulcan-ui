import React from 'react'
import {createPortal} from 'react-dom'
import usePortal from '../../hooks/PortalHook/usePortal'
import styles from './Dialog.scss'
import PropTypes from 'prop-types'

Dialog.propTypes = {
  onClickOutside: PropTypes.func,
  children: PropTypes.node
}

function Dialog({onClickOutside, children}) {
  const portalContainer = usePortal('component-Dialog-container')

  function handleClickOutside() {
    onClickOutside && onClickOutside()
  }

  return createPortal(
    <div
      className={styles.componentDialog}
      onClick={handleClickOutside}
    >
      <div
        className={styles.dialog}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    portalContainer
  )
}

export default Dialog
