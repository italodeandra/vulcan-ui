import React, { useRef, useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './demo.scss'
import AppBarDemo from './demo/AppBarDemo'
import AutocompleteDemo from './demo/AutocompleteDemo'
import ButtonDemo from './demo/ButtonDemo'
import HomeDemo from './demo/HomeDemo'
import NavigationDrawerDemo from './demo/NavigationDrawerDemo'
import ProgressBarDemo from './demo/ProgressBarDemo'
import SpinnerDemo from './demo/SpinnerDemo'
import TextFielDemo from './demo/TextFieldDemo'
import useTitle from './demo/useTitle'
import { AppBar, Button, Icon, NavigationDrawer, useMobile } from './lib'

const App = () => {
    const [title] = useTitle()
    const AppContainerRef = useRef(null)
    const AppBarRef = useRef(null)
    const [isMobile] = useMobile()
    const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useState(!isMobile)

    return (
        <div className='demo-App'>
            <Router>
                <AppBar sticky setRef={AppBarRef}>
                    <Button icon onClick={() => setIsNavigationDrawerOpen(t => !t)} autoFocus>
                        <Icon name='menu' />
                    </Button>
                    <span className='title'>
                        {title}
                    </span>
                </AppBar>
                <NavigationDrawer
                    className='navigation-drawer'
                    open={isNavigationDrawerOpen}
                    containerRef={AppContainerRef}
                    onScrimClick={() => setIsNavigationDrawerOpen(false)}
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
                                           title={!isNavigationDrawerOpen && 'Home'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        <Icon name='home' />
                        Home
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/app-bar'
                                           title={!isNavigationDrawerOpen && 'App bar'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        App bar
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/autocomplete'
                                           title={!isNavigationDrawerOpen && 'Autocomplete'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Autocomplete
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/button'
                                           title={!isNavigationDrawerOpen && 'Button'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Button
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/navigation-drawer'
                                           title={!isNavigationDrawerOpen && 'Navigation drawer'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Navigation drawer
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/progress-bar'
                                           title={!isNavigationDrawerOpen && 'Progress bar'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Progress bar
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/spinner'
                                           title={!isNavigationDrawerOpen && 'Spinner'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Spinner
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Item to='/text-field'
                                           title={!isNavigationDrawerOpen && 'Text field'}
                                           onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                        Text field
                    </NavigationDrawer.Item>
                </NavigationDrawer>
                <div className='App-container' ref={AppContainerRef}>
                    <Route path='/' exact component={HomeDemo} />
                    <Route path='/app-bar' component={AppBarDemo} />
                    <Route path='/autocomplete' component={AutocompleteDemo} />
                    <Route path='/button' component={ButtonDemo} />
                    <Route path='/navigation-drawer' component={NavigationDrawerDemo} />
                    <Route path='/progress-bar' component={ProgressBarDemo} />
                    <Route path='/spinner' component={SpinnerDemo} />
                    <Route path='/text-field' component={TextFielDemo} />
                </div>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById('root'))
