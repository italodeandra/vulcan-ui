import React, { useEffect } from 'react'
import useTitle from './useTitle'

const NavigationDrawerDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Navigation drawer'))

    return (
        <>
            <h1>Navigation drawer</h1>
            <>
                <h2>Standard</h2>
                <div>Example on left side of the page</div>
                <pre>{`<NavigationDrawer
    className='navigation-drawer'
    open={isNavigationDrawerOpen}
    containerRef={AppContainerRef}
    onScrimClick={()' => setIsNavigationDrawerOpen(false)}
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
            <span className='app-bar-title'>
                Vulcan UI
            </span>
        </AppBar>
    </NavigationDrawer.Header>
    <NavigationDrawer.Item to='/'
                           exact
                           title={!isNavigationDrawerOpen' && 'Home'}
                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
        <Icon name='home' />
        Home
    </NavigationDrawer.Item>
    <NavigationDrawer.Divider />
    <NavigationDrawer.Subtitle>Demos</NavigationDrawer.Subtitle>
    <NavigationDrawer.Item to='/app-bar'
                           title={!isNavigationDrawerOpen' && 'App bar'}
                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
        App bar
    </NavigationDrawer.Item>
</NavigationDrawer>`}</pre>
            </>
            <>
                <h2>Collapsable</h2>
                <div>Icons stays on screen for fast navigation</div>
                <pre>{`<NavigationDrawer
    className='navigation-drawer'
    open={isNavigationDrawerOpen}
    containerRef={AppContainerRef}
    onScrimClick={()' => setIsNavigationDrawerOpen(false)}
    appBarRef={AppBarRef}
    collapsable
>
</NavigationDrawer>`}</pre>
            </>
            <>
                <h2>Behavior</h2>
                <h3>NavigationDrawer.Header</h3>
                <div>Only shows when the device is mobile</div>
            </>
        </>
    )
}

export default NavigationDrawerDemo
