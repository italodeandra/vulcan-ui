//TODO: Remove the manual animation from the scrim and use the *future* Animation component

import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { classNames, useMobile } from '../index'
import './NavigationDrawer.scss'

const NavigationDrawer = ({ className, children, open, containerRef, collapsable, onScrimClick, appBarRef }) => {
    const scrimRef = useRef(null)
    const navigationDrawerRef = useRef(null)
    const [isMobile] = useMobile()
    const [isAnimationReady, setIsAnimationReady] = useState(false)

    className = classNames(
        className,
        'vui-NavigationDrawer',
        open && 'open',
        collapsable && 'collapsable',
        isMobile && 'mobile'
    )

    useEffect(() => {
        if (isMobile) {
            setTimeout(() => {
                setIsAnimationReady(true)
            }, 280)
        }
    }, [isMobile])

    useEffect(() => {
        if (!isMobile) {
            const containerRefEl = containerRef && containerRef.current
            if (containerRefEl) {
                containerRefEl.style.transition = 'none'
                containerRefEl.style.animation = 'none'
                containerRefEl.classList.add('vui-NavigationDrawer-margin-left')
            }

            setTimeout(() => {
                if (containerRefEl) {
                    containerRefEl.style.transition = ''
                }
            }, 140)

            return () => {
                if (containerRefEl) {
                    containerRefEl.classList.remove('vui-NavigationDrawer-margin-left')
                }
            }
        }
    }, [containerRef, isMobile])

    useEffect(() => {
        if (!isMobile) {
            const containerRefEl = containerRef && containerRef.current

            if (containerRefEl) {
                if (collapsable) {
                    containerRefEl.classList.add('vui-NavigationDrawer-collapsable')
                }

                containerRefEl.classList[open ? 'add' : 'remove']('vui-NavigationDrawer-open')
            }

            return () => {
                containerRefEl.classList.remove('vui-NavigationDrawer-open')
                containerRefEl.classList.remove('vui-NavigationDrawer-collapsable')
            }
        }

        if (open) {
            const autofocusEl = navigationDrawerRef.current.querySelector('[auto-focus]')
            autofocusEl && autofocusEl.focus()
        } else if (appBarRef) {
            const autofocusEl = appBarRef.current.querySelector('[auto-focus]')
            autofocusEl && autofocusEl.focus()
        }
    }, [containerRef, open, collapsable, isMobile, appBarRef])

    return (
        <>
            {isMobile &&
            <div ref={scrimRef}
                 className={
                     classNames(
                         'vui-NavigationDrawer-scrim',
                         open && 'open',
                         isAnimationReady && 'animation-ready'
                     )
                 }
                 onClick={onScrimClick} />
            }
            <div className={className}
                 ref={navigationDrawerRef}>
                {children}
            </div>
        </>
    )
}

export default NavigationDrawer

NavigationDrawer.Item = ({ children, to, exact, title, onClick }) => (
    <NavLink className='item'
             activeClassName='active'
             exact={exact}
             to={to}
             title={title ? title : undefined}
             onClick={onClick}>
        {children}
    </NavLink>
)


NavigationDrawer.Header = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isMobile] = useMobile()

    return isMobile ? (
        <div className='header'>
            {children}
        </div>
    ) : null
}
