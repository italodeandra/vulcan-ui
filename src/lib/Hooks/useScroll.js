import { useEffect, useState } from 'react'

const useScroll = (element) => {
    const [scrollY, setScrollY] = useState(null)

    useEffect(() => {
        const elementRef = element.current

        const handleScroll = () => {
            setScrollY(element.current.scrollY)
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
    }, [element])

    return [
        scrollY
    ]
}

export default useScroll
