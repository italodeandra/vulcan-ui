import React, {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import usePortal from '../../hooks/PortalHook/usePortal'
import styles from './Menu.scss'
import PropTypes from 'prop-types'

Menu.propTypes = {
  target: PropTypes.object,
  targetAlign: PropTypes.string,
  onClickOutside: PropTypes.func,
  children: PropTypes.node
}

function Menu({target, targetAlign, onClickOutside, children}) {
  const [targetPositionX, setTargetPositionX] = useState(null)
  const [targetPositionY, setTargetPositionY] = useState(null)
  const ref = useRef(null)
  const portalContainer = usePortal(styles.componentMenuContainer)

  useEffect(() => {
    const targetPosition = {
      x: null,
      y: null
    }
    const targetAlignArray = targetAlign ? targetAlign.split(' ') : ''
    const targetDOMRect = target.current.getBoundingClientRect()
    const refDOMRect = ref.current.getBoundingClientRect()
    if (!targetAlignArray.includes('right')) {
      setTargetPositionX(targetDOMRect.x)
    } else {
      setTargetPositionX(targetDOMRect.x + targetDOMRect.width - refDOMRect.width)
    }
    if (!targetAlignArray.includes('bottom')) {
      setTargetPositionY(targetDOMRect.y)
    } else {
      setTargetPositionY(targetPosition.y = targetDOMRect.y + targetDOMRect.height - refDOMRect.height)
    }
  }, [])

  useEffect(() => {
    if (onClickOutside) {
      window.addEventListener('click', handleClickOutside)
    }

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  function handleClickOutside(event) {
    if (event.target) {
      if (!event.target.classList.contains(styles.componentMenu) &&
        !event.target.classList.contains(styles.menuItem)) {
        onClickOutside()
      }
    }
  }

  return createPortal(
    <div
      ref={ref}
      className={styles.componentMenu}
      style={{
        left: targetPositionX,
        top: targetPositionY
      }}
    >
      {children}
    </div>,
    portalContainer
  )
}

export default Menu
