import React, { useEffect } from 'react'
import { Card, Tabs } from '../lib'
import useTitle from './useTitle'

const TabsDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Tabs'))
    const tabs = Tabs.Context(0)

    return (
        <>
            <h1>Tabs</h1>
            <>
                <h2>Usage</h2>
                <pre>{`const tabs = Tabs.Context(0)`}</pre>
            </>
            <>
                <h2>Tabs</h2>
                <div>
                    <Card>
                        <Tabs tabs={tabs}>
                            <Tabs.Tab>Page 1</Tabs.Tab>
                            <Tabs.Tab>Page 2</Tabs.Tab>
                        </Tabs>
                    </Card>
                </div>
                <pre>{`<Tabs tabs='{tabs}'>
    <Tabs.Tab>Page 1</Tabs.Tab>
    <Tabs.Tab>Page 2</Tabs.Tab>
</Tabs>`}</pre>
            </>
            <>
                <h2>Pages</h2>
                <div>
                    <Card>
                        <Tabs.Pages tabs={tabs}>
                            <Tabs.Page>
                                <Card.Title>
                                    Page 1
                                </Card.Title>
                                <Card.Content>
                                    <div>
                                        <input id='a' type='text' autoFocus />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda
                                        commodi
                                        deserunt
                                        dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam
                                        maiores
                                        nam
                                        nesciunt
                                        nostrum, odio officiis quaerat, vel.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cumque error inventore quaerat recusandae unde. Adipisci aliquam architecto delectus, incidunt perspiciatis similique. Enim fugit quia quis quod sunt. Sapiente.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cumque error inventore quaerat recusandae unde. Adipisci aliquam architecto delectus, incidunt perspiciatis similique. Enim fugit quia quis quod sunt. Sapiente.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cumque error inventore quaerat recusandae unde. Adipisci aliquam architecto delectus, incidunt perspiciatis similique. Enim fugit quia quis quod sunt. Sapiente.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cumque error inventore quaerat recusandae unde. Adipisci aliquam architecto delectus, incidunt perspiciatis similique. Enim fugit quia quis quod sunt. Sapiente.
                                    </div>
                                </Card.Content>
                            </Tabs.Page>
                            <Tabs.Page>
                                <Card.Title>
                                    Page 2
                                </Card.Title>
                                <Card.Content>
                                    <input id='a' type='text' autoFocus />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda
                                    commodi
                                    deserunt
                                    dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam
                                    maiores
                                    nam
                                    nesciunt
                                    nostrum, odio officiis quaerat, vel.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi, ipsa iusto magni
                                    quaerat
                                    qui sed temporibus unde ut veniam. At beatae dignissimos ea eum nobis sit tempore,
                                    veniam
                                    veritatis?
                                </Card.Content>
                            </Tabs.Page>
                        </Tabs.Pages>
                    </Card>
                </div>
                <pre>{`<Tabs.Pages tabs='{tabs}'>
    <Tabs.Page>
        <Card.Title>
            Page 1
        </Card.Title>
        <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda
            commodi
            deserunt
            dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam
            maiores
            nam
            nesciunt
            nostrum, odio officiis quaerat, vel.
        </Card.Content>
    </Tabs.Page>
    <Tabs.Page>
        <Card.Title>
            Page 2
        </Card.Title>
        <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda
            commodi
            deserunt
            dolorem ducimus error exercitationem fugiat id inventore ipsa iure laboriosam
            maiores
            nam
            nesciunt
            nostrum, odio officiis quaerat, vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi, ipsa iusto magni
            quaerat
            qui sed temporibus unde ut veniam. At beatae dignissimos ea eum nobis sit tempore,
            veniam
            veritatis?
        </Card.Content>
    </Tabs.Page>
</Tabs.Pages>`}</pre>
            </>
        </>
    )
}

export default TabsDemo
