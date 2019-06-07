import React, { useEffect } from 'react'
import { Button, Card } from '../lib'
import useTitle from './useTitle'

const CardDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Card'))

    return (
        <>
            <h1>Card</h1>
            <div>
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
                    <Card.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi deserunt
                        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam maiores nam
                        nesciunt
                        nostrum, odio officiis quaerat, vel.
                    </Card.Content>
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
        </>
    )
}

export default CardDemo
