// TODO: Make better animations

import React from 'react'
import { createPortal } from 'react-dom'
import usePortal from '../Hooks/usePortal'
import { Button, useSnackbar } from '../index'
import './Snackbar.scss'

const Snackbars = () => {
    const [, snackbars] = useSnackbar()
    const portalContainer = usePortal('vui-Snackbar-container')

    return createPortal(
        <div className='vui-Snackbars'>
            {snackbars.map(snackbar => {
                let action

                if (snackbar.action) {
                    if (typeof snackbar.action === 'string') {
                        action = <Button text onClick={() => snackbar.close()}>{snackbar.action}</Button>
                    } else {
                        action = snackbar.action(snackbar)
                    }
                }

                return (
                    <div className='vui-Snackbar' key={snackbar.id}>
                        {snackbar.message}
                        {!!action &&
                        <div className='action'>
                            {action}
                        </div>
                        }
                    </div>
                )
            })}
        </div>,
        portalContainer
    )
}

export default Snackbars
