import React, { useEffect } from 'react'
import { Button, Card } from '../lib'
import useTitle from './useTitle'

const CardDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Card'))

    return (
        <div className='component'>
            <h2>Card</h2>
            <div>
                <Card>
                    <Card.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
                        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam
                        nesciunt
                        nostrum, odio officiis quaerat, vel.
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title>
                        Card title
                    </Card.Title>
                    <Card.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
                        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam
                        nesciunt
                        nostrum, odio officiis quaerat, vel.
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title>
                        Card title
                    </Card.Title>
                    <Card.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
                        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam
                        nesciunt
                        nostrum, odio officiis quaerat, vel.
                    </Card.Content>
                    <Card.Actions alignRight>
                        <Button>Action</Button>
                        <Button text>Secondary</Button>
                    </Card.Actions>
                </Card>
            </div>
            <pre>{`<Card>
    <Card.Title>
        Card title
    </Card.Title>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam
        nesciunt
        nostrum, odio officiis quaerat, vel.
    </Card.Content>
    <Card.Actions alignRight>
        <Button>Action</Button>
        <Button text>Secondary</Button>
    </Card.Actions>
</Card>`}</pre>
        </div>
    )
}

export default CardDemo
