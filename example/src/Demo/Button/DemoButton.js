import React from 'react'
import {Button} from 'vulcan-ui'
import './DemoButton.scss'

function DemoButton() {
  function handleButtonClick() {
    // eslint-disable-next-line no-undef
    alert('The button was clicked')
  }

  return (
    <div className='view-DemoButton'>
      <h2>Demo Button</h2>
      <div className='example'>
        <Button onClick={handleButtonClick}>Button</Button>
      </div>
      <div className='example'>
        <Button type='text' onClick={handleButtonClick}>Button</Button>
      </div>
    </div>
  )
}

export default DemoButton
