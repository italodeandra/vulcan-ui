import { useEffect, useState } from 'react'

const mobileWidthViewport = 758

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileWidthViewport)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobileWidthViewport)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return [
        isMobile
    ]
}

export default useMobile
