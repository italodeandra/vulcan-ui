import React, { useEffect } from 'react'
import { Button, Icon } from '../lib'
import useTitle from './useTitle'

const ButtonDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Button'))

    return (
        <div className='component'>
            <h2>Button</h2>
            <div className='subcomponent'>
                <p><strong>Contained</strong></p>
                <p>
                    <Button onClick={() => alert('Contained button clicked')}>
                        Contained button
                    </Button>
                </p>
                <pre>{`<Button onClick={() => alert('Contained button clicked')}>
    Contained button
</Button>`}</pre>
            </div>
            <div className='subcomponent'>
                <p><strong>Outlined</strong></p>
                <p>
                    <Button outlined onClick={() => alert('Outlined button clicked')}>
                        Outlined button
                    </Button>
                </p>
                <pre>{`<Button outlined onClick={() => alert('Outlined button clicked')}>
    Outlined button
</Button>`}</pre>
            </div>
            <div className='subcomponent'>
                <p><strong>Text</strong></p>
                <p>
                    <Button text onClick={() => alert('Text button clicked')}>
                        Text button
                    </Button>
                </p>
                <pre>{`<Button text onClick={() => alert('Text button clicked')}>
    Text button
</Button>`}</pre>
            </div>
            <div className='subcomponent'>
                <p><strong>Icon</strong></p>
                <p>
                    <Button icon onClick={() => alert('Icon button clicked')}>
                        <Icon name='menu' />
                    </Button>
                </p>
                <pre>{`<Button icon onClick={() => alert('Icon button clicked')}>
    <Icon name='menu' />
</Button>`}</pre>
            </div>
        </div>
    )
}

export default ButtonDemo
