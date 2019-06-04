import React from 'react'
import DemoButton from './Demo/Button/DemoButton'
import DemoFloatingActionButton from './Demo/FloatingActionButton/DemoFloatingActionButton'
import DemoTextField from './Demo/TextField/DemoTextField'
import DemoMenu from './Demo/Menu/DemoMenu'
import DemoDialog from './Demo/Dialog/DemoDialog'
import DemoForm from './Demo/Form/DemoForm'

import './Demo.scss'

function Demo() {
  return (
    <div className='view-Demo'>
      <h1>Vulcan UI Demo</h1>
      <DemoButton />
      <DemoFloatingActionButton />
      <DemoTextField />
      <DemoMenu />
      <DemoDialog />
      <DemoForm />
    </div>
  )
}

export default Demo
