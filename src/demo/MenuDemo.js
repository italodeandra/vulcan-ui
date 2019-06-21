import React, { useEffect } from 'react'
import { Button, Menu, useMenu } from '../lib'
import useTitle from './useTitle'

const MenuDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Menu'))

    const [menu1Ref, menu1Show, menu1SetShow] = useMenu()

    return (
        <>
            <h1>Menu</h1>
            <div>
                <Button
                    setRef={menu1Ref}
                    onClick={() => menu1SetShow(s => !s)}
                >Show menu</Button>
                {menu1Show &&
                <Menu
                    target={menu1Ref}
                    onClickOutside={() => menu1SetShow(false)}
                    targetAlign='bottom right'
                >
                    <Menu.Title>Test title</Menu.Title>
                    <Menu.Item>
                        Menu item
                    </Menu.Item>
                </Menu>
                }
            </div>
            <pre>{`const [menu1Ref, menu1Show, menu1SetShow] = useMenu()

<Button
    setRef={menu1Ref}
    onClick={() => menu1SetShow(s => !s)}
>Show menu</Button>
{menu1Show &&
<Menu
    target={menu1Ref}
    onClickOutside={() => menu1SetShow(false)}
    targetAlign='bottom right'
>
    <Menu.Title>Test title</Menu.Title>
    <Menu.Item>
        Menu item
    </Menu.Item>
</Menu>`}</pre>
        </>
    )
}

export default MenuDemo
