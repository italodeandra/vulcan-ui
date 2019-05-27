import React, { useEffect } from 'react'

import { AppBar, Button, Icon } from '../lib/index'
import useTitle from './useTitle'

const AppBarDemo = () => {
    const [, setTitle] = useTitle()

    useEffect(() => {
        setTitle('App bar')
    }, [setTitle])

    return (
        <div className='demo'>
            <div className='subdemo'>
                <h2>App bar</h2>
                <p>Example above on the page</p>
                <pre>{`<AppBar sticky getRef='{AppBarRef}'>
    <Button icon onClick={() => setIsNavigationDrawerOpen(t => !t)} autoFocus>
        <Icon name='menu' />
    </Button>
    <span className='title'>
        {title}
    </span>
</AppBar>`}</pre>
            </div>
            <div className='subdemo'>
                <h2>App bar not sticky</h2>
                <p>
                    <AppBar>
                        <Button icon onClick={() => alert('Button clicked')}>
                            <Icon name='menu' />
                        </Button>
                    </AppBar>
                </p>
                <pre>{`<AppBar>
    <Button icon onClick={() => alert('Button clicked')}>
        <Icon name='menu' />
    </Button>
</AppBar>`}</pre>
            </div>
        </div>
    )
}

export default AppBarDemo
