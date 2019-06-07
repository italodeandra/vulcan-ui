import React, { useEffect } from 'react'
import { ProgressBar } from '../lib'
import useTitle from './useTitle'

const ProgressBarDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Progress bar'))

    return (
        <>
            <h1>Progress bar</h1>
            <>
                <h2>Determinate</h2>
                <div>
                    <ProgressBar progression={20} />
                </div>
                <pre>{`<ProgressBar progression={20} />`}</pre>
            </>
            <>
                <h2>Indeterminate</h2>
                <div>
                    <ProgressBar indeterminate height={2} />
                </div>
                <pre>{`<ProgressBar indeterminate height={2} />`}</pre>
            </>
        </>
    )
}

export default ProgressBarDemo
