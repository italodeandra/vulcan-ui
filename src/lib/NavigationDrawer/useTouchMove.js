import { useEffect, useRef } from 'react'
import { disableBodyScroll } from '../index'

const useTouchMove = (elementRef, open, setOpen) => {
    const touchStartX = useRef(null)
    const currentElementX = useRef(0)
    const openRef = useRef(open)
    const nextOpen = useRef(open)

    const handleTouchStart = (e) => {
        if (elementRef.current) {
            touchStartX.current = e.touches[0].pageX
            currentElementX.current = getTranslateX(elementRef.current)
        }
    }

    const handleTouchMove = (e) => {
        if (elementRef.current) {
            if ((!openRef.current && touchStartX.current < 60) || (openRef.current && touchStartX.current > window.innerWidth - 56)) {
                elementRef.current.classList.add('open')
                elementRef.current.style.transitionProperty = 'box-shadow'

                const touchMoveX = e.targetTouches[0].pageX
                const newTranslateX = currentElementX.current + (touchMoveX - touchStartX.current)
                if (newTranslateX < 0) {
                    elementRef.current.style.transform = `translateX(${newTranslateX}px)`
                }
                nextOpen.current = newTranslateX > -(window.innerWidth/2)
            }
        }
    }

    const handleTouchEnd = () => {
        if (elementRef.current) {
            elementRef.current.style.transitionProperty = ''
            elementRef.current.style.transform = ''
            if (nextOpen.current) {
                elementRef.current.classList.add('open')
                document.body.style.overflow = 'hidden'
                disableBodyScroll(true, '.can-scroll')
            } else {
                document.body.style.overflow = ''
                disableBodyScroll(false, '.can-scroll')
                elementRef.current.classList.remove('open')
            }
            setOpen(nextOpen.current)
        }
    }

    useEffect(() => {
        openRef.current = open
        nextOpen.current = open
    }, [open])

    useEffect(() => {
        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

function getTranslateX(element) {
    const style = window.getComputedStyle(element).getPropertyValue('transform')
    return parseInt(style.split(',')[4])
}

export default useTouchMove
