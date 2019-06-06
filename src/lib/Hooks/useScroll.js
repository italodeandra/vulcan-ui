import { useEffect, useState } from 'react'

const useScroll = (element, endOffset = 0) => {
    const [scrollY, setScrollY] = useState(null)
    const [isScrollEnd, setIsEndReached] = useState(false)

    useEffect(() => {
        const elementRef = element.current

        const handleScroll = () => {
            const newScrollY = element.current.scrollY || element.current.scrollTop
            const innerHeight = element.current.innerHeight || element.current.clientHeight
            const scrollHeight = element.current.scrollHeight || document.body.scrollHeight
            if (scrollHeight > innerHeight) {
                setScrollY(newScrollY)
                setIsEndReached(newScrollY >= scrollHeight - innerHeight - endOffset)
            }
        }

        if (element.current) {
            handleScroll()
            elementRef.addEventListener('scroll', handleScroll)
            elementRef.addEventListener('resize', handleScroll)
        }

        return () => {
            elementRef.removeEventListener('scroll', handleScroll)
            elementRef.removeEventListener('resize', handleScroll)
        }
    }, [element, endOffset])

    return [
        scrollY,
        isScrollEnd
    ]
}

export default useScroll
