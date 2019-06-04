import React from 'react'
import {Button, Menu, useMenu} from 'vulcan-ui'
import './DemoMenu.scss'

function DemoMenu() {
  const [menu1Ref, menu1Show, menu1SetShow] = useMenu()
  const [menu2Ref, menu2Show, menu2SetShow] = useMenu()

  return (
    <div className='view-DemoMenu'>
      <h2>Demo Menu</h2>
      <div className='example'>
        <Button
          setRef={menu1Ref}
          onClick={() => menu1SetShow(!menu1Show)}
        >Test Menu 1</Button>
        {menu1Show &&
        <Menu
          target={menu1Ref}
          onClickOutside={() => menu1SetShow(false)}
        >
          <div className='menu-item'>
            Menu 1 Item
          </div>
        </Menu>
        }
      </div>
      <div className='example'>
        <Button
          setRef={menu2Ref}
          onClick={() => menu2SetShow(!menu2Show)}
        >Test Menu 2</Button>
        {menu2Show &&
        <Menu
          target={menu2Ref}
          targetAlign='bottom right'
          onClickOutside={() => menu2SetShow(false)}
        >
          <div className='menu-item'>
            Menu 2 Item
          </div>
        </Menu>
        }
      </div>
    </div>
  )
}

export default DemoMenu
