import React, { useRef } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './demo.scss'
import AppBarDemo from './demo/AppBarDemo'
import ButtonDemo from './demo/ButtonDemo'
import CardDemo from './demo/CardDemo'
import DataTableDemo from './demo/DataTableDemo'
import DialogDemo from './demo/DialogDemo'
import HomeDemo from './demo/HomeDemo'
import MenuDemo from './demo/MenuDemo'
import NavigationDrawerDemo from './demo/NavigationDrawerDemo'
import ProgressBarDemo from './demo/ProgressBarDemo'
import SnackbarDemo from './demo/SnackbarDemo'
import SpinnerDemo from './demo/SpinnerDemo'
import TabsDemo from './demo/TabsDemo'
import TextFieldAutocompleteDemo from './demo/TextFieldAutocompleteDemo'
import TextFieldChipsDemo from './demo/TextFieldChipsDemo'
import TextFielDemo from './demo/TextFieldDemo'
import useTitle from './demo/useTitle'
import { AppBar, Button, Icon, NavigationDrawer, polyfill, Snackbars, useLocalStorage, useMobile } from './lib'
import TextFieldDateDemo from "./demo/TextFieldDateDemo";

polyfill()

const App = () => {
    const [title] = useTitle()
    const AppContainerRef = useRef(null)
    const AppBarRef = useRef(null)
    const [isMobile] = useMobile()
    const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useLocalStorage('IsNavigationDrawerOpen', !isMobile)
    const [navigationDrawerGroupCollapse, setNavigationDrawerGroupCollapse] = useLocalStorage('NavigationDrawerGroupCollapse', false)

    return (
        <div className='demo-App'>
            <Router>
                <AppBar className='app-bar' sticky setRef={AppBarRef}>
                    {(isMobile
                        && ('standalone' in window.navigator)
                        && window.navigator.standalone)
                    &&
                    <AppBar.Row className='iphone-app-bar' />
                    }
                    <AppBar.Row>
                        <Button icon onClick={() => setIsNavigationDrawerOpen(t => !t)} autoFocus>
                            <Icon name='menu' />
                        </Button>
                        <span className='app-bar-title' onClick={() => window.location.reload()}>
                        {title}
                    </span>
                    </AppBar.Row>
                </AppBar>
                <NavigationDrawer
                    className='navigation-drawer'
                    open={isNavigationDrawerOpen}
                    containerRef={AppContainerRef}
                    appBarRef={AppBarRef}
                    collapsable
                    onOpenChange={(isOpen) => setIsNavigationDrawerOpen(isOpen)}
                >
                    <NavigationDrawer.Header>
                        <AppBar className='app-bar'>
                            {(isMobile
                                && ('standalone' in window.navigator)
                                && window.navigator.standalone )
                            &&
                            <AppBar.Row className='iphone-app-bar' />
                            }
                            <AppBar.Row>
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
                            </AppBar.Row>
                        </AppBar>
                    </NavigationDrawer.Header>
                    <NavigationDrawer.Item
                        to='/'
                        exact
                        title={!isNavigationDrawerOpen && 'Home'}
                        onClick={() => isMobile && setIsNavigationDrawerOpen(false)}
                        badge={5}
                        icon={<Icon name='home' />}
                    >
                        Home
                    </NavigationDrawer.Item>
                    <NavigationDrawer.Divider />
                    <NavigationDrawer.Subtitle
                        collapse={navigationDrawerGroupCollapse}
                        onCollapseChange={collapse => setNavigationDrawerGroupCollapse(collapse)}
                    >
                        Demos
                    </NavigationDrawer.Subtitle>
                    <NavigationDrawer.ItemGroup collapse={navigationDrawerGroupCollapse}>
                        <NavigationDrawer.Item to='/app-bar'
                                               title={!isNavigationDrawerOpen && 'App bar'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            App bar
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/button'
                                               title={!isNavigationDrawerOpen && 'Button'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Button
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/card'
                                               title={!isNavigationDrawerOpen && 'Card'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Card
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/data-table'
                                               title={!isNavigationDrawerOpen && 'Data table'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Data table
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/dialog'
                                               title={!isNavigationDrawerOpen && 'Dialog'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Dialog
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/menu'
                                               title={!isNavigationDrawerOpen && 'Menu'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Menu
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
                        <NavigationDrawer.Item to='/snackbar'
                                               title={!isNavigationDrawerOpen && 'Snackbar'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Snackbar
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/spinner'
                                               title={!isNavigationDrawerOpen && 'Spinner'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Spinner
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/tabs'
                                               title={!isNavigationDrawerOpen && 'Tabs'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Tabs
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/text-field'
                                               title={!isNavigationDrawerOpen && 'Text field'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Text field
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/text-field-autocomplete'
                                               title={!isNavigationDrawerOpen && 'Text field Autocomplete'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Text field Autocomplete
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/text-field-chips'
                                               title={!isNavigationDrawerOpen && 'Text field Chips'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Text field Chips
                        </NavigationDrawer.Item>
                        <NavigationDrawer.Item to='/text-field-date'
                                               title={!isNavigationDrawerOpen && 'Text field Date'}
                                               onClick={() => isMobile && setIsNavigationDrawerOpen(false)}>
                            Text field Date
                        </NavigationDrawer.Item>
                    </NavigationDrawer.ItemGroup>
                </NavigationDrawer>
                <div className='app-container' ref={AppContainerRef}>
                    <Route path='/' exact component={HomeDemo} />
                    <Route path='/app-bar' component={AppBarDemo} />
                    <Route path='/button' component={ButtonDemo} />
                    <Route path='/card' component={CardDemo} />
                    <Route path='/data-table' component={DataTableDemo} />
                    <Route path='/dialog' component={DialogDemo} />
                    <Route path='/menu' component={MenuDemo} />
                    <Route path='/navigation-drawer' component={NavigationDrawerDemo} />
                    <Route path='/progress-bar' component={ProgressBarDemo} />
                    <Route path='/snackbar' component={SnackbarDemo} />
                    <Route path='/spinner' component={SpinnerDemo} />
                    <Route path='/tabs' component={TabsDemo} />
                    <Route path='/text-field' component={TextFielDemo} />
                    <Route path='/text-field-autocomplete' component={TextFieldAutocompleteDemo} />
                    <Route path='/text-field-chips' component={TextFieldChipsDemo} />
                    <Route path='/text-field-date' component={TextFieldDateDemo} />
                </div>
                <Snackbars />
            </Router>
        </div>
    )
}

render(<App />, document.getElementById('root'))

