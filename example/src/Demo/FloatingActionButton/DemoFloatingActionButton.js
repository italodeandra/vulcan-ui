import React from 'react'
import {FloatingActionButton} from 'vulcan-ui'
import './DemoFloatingActionButton.scss'

function DemoFloatingActionButton() {
  function handleButtonClick() {
    // eslint-disable-next-line no-undef
    alert('The action button was clicked')
  }

  function handleExtendedButtonClick() {
    // eslint-disable-next-line no-undef
    alert('The extended action button was clicked')
  }

  return (
    <div className='view-DemoFloatingActionButton'>
      <h2>Demo Button</h2>
      <div className='example'>
        <FloatingActionButton onClick={handleButtonClick}>
          <i className='material-icons'>
            add
          </i>
        </FloatingActionButton>
      </div>
      <div className='example'>
        <FloatingActionButton
          onClick={handleExtendedButtonClick}
          extended={true}
        >
          <i className='material-icons'>
            add
          </i>
          <label>
            Extended
          </label>
        </FloatingActionButton>
      </div>
    </div>
  )
}

export default DemoFloatingActionButton
