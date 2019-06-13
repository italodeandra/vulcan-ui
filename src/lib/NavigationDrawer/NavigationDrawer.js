//TODO: Remove the manual animation from the scrim and use the *future* Animation component
//TODO: Fix mobile version on collapsable

import React, { useEffect, useRef, useState } from 'react'
import { classNames, useMobile } from '../index'
import Divider from './Divider/Divider'
import Header from './Header/Header'
import Item from './Item/Item'
import ItemGroup from './ItemGroup/ItemGroup'
import './NavigationDrawer.scss'
import Subtitle from './Subtitle/Subtitle'

const NavigationDrawer = ({ className, children, open, containerRef, collapsable, onScrimClick, appBarRef }) => {
    const scrimRef = useRef(null)
    const navigationDrawerRef = useRef(null)
    const [isMobile] = useMobile()
    const [isAnimationReady, setIsAnimationReady] = useState(false)
    const [top, setTop] = useState(undefined)

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

    useEffect(() => {
        setTop(appBarRef.current.getBoundingClientRect().height)
    }, [])

    return (
        <>
            {isMobile &&
            <div
                ref={scrimRef}
                className={
                    classNames(
                        'vui-NavigationDrawer-scrim',
                        open && 'open',
                        isAnimationReady && 'animation-ready'
                    )
                }
                onClick={onScrimClick}
            />
            }
            <div
                className={className}
                ref={navigationDrawerRef}
                style={{ top }}
            >
                {children}
            </div>
        </>
    )
}

export default NavigationDrawer

NavigationDrawer.Item = Item

NavigationDrawer.Header = Header

NavigationDrawer.Divider = Divider

NavigationDrawer.Subtitle = Subtitle

NavigationDrawer.ItemGroup = ItemGroup
