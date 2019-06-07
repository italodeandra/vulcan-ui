import React, { useEffect } from 'react'
import { Button, Icon } from '../lib'
import useTitle from './useTitle'

const ButtonDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Button'))

    return (
        <>
            <h1>Button</h1>
            <>
                <h2>Contained</h2>
                <div>
                    <Button onClick={() => alert('Contained button clicked')}>
                        Contained button
                    </Button>
                </div>
                <pre>{`<Button onClick={() => alert('Contained button clicked')}>
    Contained button
</Button>`}</pre>
            </>
            <>
                <h2>Outline</h2>
                <div>
                    <Button outlined onClick={() => alert('Outlined button clicked')}>
                        Outlined button
                    </Button>
                </div>
                <pre>{`<Button outlined onClick={() => alert('Outlined button clicked')}>
    Outlined button
</Button>`}</pre>
            </>
            <>
                <h2>Text</h2>
                <div>
                    <Button text onClick={() => alert('Text button clicked')}>
                        Text button
                    </Button>
                </div>
                <pre>{`<Button text onClick={() => alert('Text button clicked')}>
    Text button
</Button>`}</pre>
            </>
            <>
                <h2>Icon</h2>
                <div>
                    <Button icon onClick={() => alert('Icon button clicked')}>
                        <Icon name='menu' />
                    </Button>
                </div>
                <pre>{`<Button icon onClick={() => alert('Icon button clicked')}>
    <Icon name='menu' />
</Button>`}</pre>
            </>
        </>
    )
}

export default ButtonDemo
