import {useEffect, useState} from 'react'

const defaultMobileWidthViewport = 758

const useMobile = (mobileWidthViewport) => {
    mobileWidthViewport = mobileWidthViewport || defaultMobileWidthViewport
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [
        isMobile,
    ]
}

export default useMobile
