//TODO: Remove the manual animation from the scrim and use the *future* Animation component

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { classNames, useMobile } from '../index'
import disableBodyScroll from '../Utils/disableBodyScroll'
import Divider from './Divider/Divider'
import Header from './Header/Header'
import Item from './Item/Item'
import ItemGroup from './ItemGroup/ItemGroup'
import './NavigationDrawer.scss'
import Subtitle from './Subtitle/Subtitle'
import useTouchMove from './useTouchMove'

const NavigationDrawer = ({ className, children, open, containerRef, collapsable, appBarRef, onOpenChange }) => {
    const scrimRef = useRef(null)
    const navigationDrawerRef = useRef(null)
    const [isMobile] = useMobile()
    const [isAnimationReady] = useState(false)
    const [top, setTop] = useState(undefined)
    const [innerOpen, setInnerOpen] = useState(open)
    useTouchMove(navigationDrawerRef, innerOpen, setInnerOpen)

    className = classNames(
        className,
        'vui-NavigationDrawer',
        'can-scroll',
        innerOpen && 'open',
        collapsable && 'collapsable',
        isMobile && 'mobile'
    )

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
                    containerRefEl.style.animation = ''
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
        const containerRefEl = containerRef && containerRef.current

        if (containerRefEl) {
            containerRefEl.classList.add('animation-ready')

            if (!isMobile) {
                if (collapsable) {
                    containerRefEl.classList.add('vui-NavigationDrawer-collapsable')
                }

                containerRefEl.classList[innerOpen ? 'add' : 'remove']('vui-NavigationDrawer-open')
            }
        }

        if (innerOpen) {
            const autofocusEl = navigationDrawerRef.current.querySelector('[auto-focus]')
            autofocusEl && autofocusEl.focus()
        } else if (appBarRef) {
            const autofocusEl = appBarRef.current.querySelector('[auto-focus]')
            autofocusEl && autofocusEl.focus()
        }

        return () => {
            containerRefEl.classList.remove('vui-NavigationDrawer-open')
            containerRefEl.classList.remove('vui-NavigationDrawer-collapsable')
        }
    }, [containerRef, innerOpen, collapsable, isMobile, appBarRef])

    useEffect(() => {
        setTop(appBarRef.current.getBoundingClientRect().height)
    }, [appBarRef])

    useEffect(() => {
        onOpenChange && onOpenChange(innerOpen)
        if (innerOpen) {
            document.body.style.overflow = 'hidden'
            disableBodyScroll(true, '.can-scroll')
        } else {
            document.body.style.overflow = ''
            disableBodyScroll(false, '.can-scroll')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [innerOpen])

    useEffect(() => {
        setInnerOpen(open)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    return (
        <>
            {isMobile &&
            <div
                ref={scrimRef}
                className={
                    classNames(
                        'vui-NavigationDrawer-scrim',
                        'can-scroll',
                        innerOpen && 'open',
                        isAnimationReady && 'animation-ready'
                    )
                }
                onClick={() => setInnerOpen(false)}
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

NavigationDrawer.Item = Item

NavigationDrawer.Header = Header

NavigationDrawer.Divider = Divider

NavigationDrawer.Subtitle = Subtitle

NavigationDrawer.ItemGroup = ItemGroup

export default NavigationDrawer
