import React, { useEffect } from 'react'

import { AppBar, Button, Icon } from '../lib/index'
import useTitle from './useTitle'

const AppBarDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('App bar'))

    return (
        <>
            <h1>App bar</h1>
            <>
                <h2>Sticky</h2>
                <p>Example above on the page. Sticky means it will stay at the top and elevate on scroll.</p>
                <pre>{`<AppBar sticky setRef={AppBarRef}>
    <Button icon onClick={() => setIsNavigationDrawerOpen(t => !t)} autoFocus>
        <Icon name='menu' />
    </Button>
    <span className='title'>
        {title}
    </span>
</AppBar>`}</pre>
            </>
            <>
                <h2>Not sticky</h2>
                <div>
                    <AppBar>
                        <Button icon onClick={() => alert('Button clicked')}>
                            <Icon name='menu' />
                        </Button>
                    </AppBar>
                </div>
                <pre>{`<AppBar>
    <Button icon onClick={() => alert('Button clicked')}>
        <Icon name='menu' />
    </Button>
</AppBar>`}</pre>
            </>
        </>
    )
}

export default AppBarDemo
