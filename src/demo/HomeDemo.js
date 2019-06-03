import React, { useEffect } from 'react'
import useTitle from './useTitle'

const HomeDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Vulcan UI Demo'))

    return (
        <h1>
            Vulcan UI Demo
        </h1>
    )
}

export default HomeDemo
