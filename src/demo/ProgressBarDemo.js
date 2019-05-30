import React from 'react'
import { ProgressBar } from '../lib'
import useTitle from './useTitle'

const ProgressBarDemo = () => {
    useTitle('Progress bar')

    return (
        <div className='component'>
            <h2>Progress bar</h2>
            <div className='subdemo'>
                <p><strong>Determinate</strong></p>
                <div>
                    <ProgressBar progression={20} />
                </div>
                <pre>{`<ProgressBar progression={20} />`}</pre>
            </div>
            <div className='subdemo'>
                <p><strong>Indeterminate</strong></p>
                <div>
                    <ProgressBar indeterminate height={2} />
                </div>
                <pre>{`<ProgressBar indeterminate height={2} />`}</pre>
            </div>
        </div>
    )
}

export default ProgressBarDemo
