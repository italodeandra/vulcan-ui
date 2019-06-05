import React, { useEffect } from 'react'
import { Card } from '../lib'
import useTitle from './useTitle'

const CardDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Card'))

    return (
        <div className='component'>
            <h2>Card</h2>
            <div>
                <Card>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
                    dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam nesciunt
                    nostrum, odio officiis quaerat, vel.
                </Card>
            </div>
            <pre>{`<Card />`}</pre>
        </div>
    )
}

export default CardDemo
