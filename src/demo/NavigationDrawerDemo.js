import React from 'react'
import useTitle from './useTitle'

const NavigationDrawerDemo = () => {
    useTitle('Navigation drawer')

    return (
        <div className='demo'>
            <h2>Navigation drawer</h2>
            <div className='subcomponent'>
                <p><strong>Standard</strong></p>
                <p>Example on left side of the page</p>
                <pre>{`<NavigationDrawer
    className='navigation-drawer'
    open='{isNavigationDrawerOpen}'
    containerRef='{AppContainerRef}'
    onScrimClick='{()' => setIsNavigationDrawerOpen(false)}
    appBarRef={AppBarRef}
>
    <NavigationDrawer.Header>
        <AppBar className='app-bar'>
            <Button
                className='menu-button'
                icon
                onClick={() => setIsNavigationDrawerOpen(t => !t)}
                autoFocus={isNavigationDrawerOpen}>
                <Icon name='menu' />
            </Button>
            <span className='title'>
                Vulcan UI
            </span>
        </AppBar>
    </NavigationDrawer.Header>
    <NavigationDrawer.Item to='/'
                           exact
                           title='{!isNavigationDrawerOpen' && 'Home'}
                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
        <Icon name='home' />
        Home
    </NavigationDrawer.Item>
</NavigationDrawer>`}</pre>
            </div>
            <div className='subcomponent'>
                <p><strong>Collapsable</strong></p>
                <p>Icons stays on screen for fast navigation</p>
                <pre>{`<NavigationDrawer
    className='navigation-drawer'
    open='{isNavigationDrawerOpen}'
    containerRef='{AppContainerRef}'
    onScrimClick='{()' => setIsNavigationDrawerOpen(false)}
    appBarRef={AppBarRef}
    collapsable
>
    <NavigationDrawer.Header>
        <AppBar className='app-bar'>
            <Button
                className='menu-button'
                icon
                onClick={() => setIsNavigationDrawerOpen(t => !t)}
                autoFocus={isNavigationDrawerOpen}>
                <Icon name='menu' />
            </Button>
            <span className='title'>
                Vulcan UI
            </span>
        </AppBar>
    </NavigationDrawer.Header>
    <NavigationDrawer.Item to='/'
                           exact
                           title='{!isNavigationDrawerOpen' && 'Home'}
                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
        <Icon name='home' />
        Home
    </NavigationDrawer.Item>
</NavigationDrawer>`}</pre>
            </div>
            <div className='subcomponent'>
                <p><strong>NavigationDrawer.Header</strong></p>
                <p>Only shows when the device is mobile</p>
            </div>
        </div>
    )
}

export default NavigationDrawerDemo
