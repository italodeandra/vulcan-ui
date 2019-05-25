import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import { AppBar, Button, Icon } from './lib'

const App = () => (
    <div className='demo-App'>
        <AppBar sticky>
            <Button icon>
                <Icon name='menu' />
            </Button>
        </AppBar>
        <div className='App-container'>

            <div className='component'>
                <h2>App bar</h2>
                <p>Example above on the page</p>
                <pre>
{`<AppBar sticky>
    <Button icon>
        <Icon name='menu' />
    </Button>
</AppBar>`}
                </pre>
            </div>

            <div className='component'>
                <div className='subcomponent'>
                    <h2>Button</h2>
                    <p><strong>Contained</strong></p>
                    <p>
                        <Button onClick={() => alert('Contained button clicked')}>
                            Contained button
                        </Button>
                    </p>
                    <pre>
{`<Button onClick={() => alert('Contained button clicked')}>
    Contained button
</Button>`}
                    </pre>
                </div>
                <div className='subcomponent'>
                    <p><strong>Outlined</strong></p>
                    <p>
                        <Button outlined onClick={() => alert('Outlined button clicked')}>
                            Outlined button
                        </Button>
                    </p>
                    <pre>
{`<Button outlined onClick={() => alert('Outlined button clicked')}>
    Outlined button
</Button>`}
                    </pre>
                </div>
                <div className='subcomponent'>
                    <p><strong>Text</strong></p>
                    <p>
                        <Button text onClick={() => alert('Text button clicked')}>
                            Text button
                        </Button>
                    </p>
                    <pre>
{`<Button text onClick={() => alert('Text button clicked')}>
    Text button
</Button>`}
                    </pre>
                </div>
                <div className='subcomponent'>
                    <p><strong>Icon</strong></p>
                    <p>
                        <Button icon onClick={() => alert('Icon button clicked')}>
                            <Icon name='menu' />
                        </Button>
                    </p>
                    <pre>
{`<Button icon onClick={() => alert('Icon button clicked')}>
    <Icon name='menu' />
</Button>`}
                    </pre>
                </div>
            </div>

        </div>
    </div>
)

render(<App />, document.getElementById('root'))
