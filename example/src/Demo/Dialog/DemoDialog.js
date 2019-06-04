import React from 'react'
import {Button, Dialog, useDialog} from 'vulcan-ui'
import './DemoDialog.scss'

function DemoDialog() {
  const [dialogRef, dialogShow, dialogSetShow] = useDialog()

  function handleDialogButtonClick() {
    // eslint-disable-next-line no-undef
    alert('The dialog button Test was clicked')
  }

  return (
    <div className='view-DemoDialog'>
      <h2>Demo Dialog</h2>
      <div>
        <Button
          setRef={dialogRef}
          onClick={() => dialogSetShow(!dialogShow)}
        >Test Dialog</Button>
        {dialogShow &&
        <Dialog
          target={dialogRef}
          onClickOutside={() => dialogSetShow(false)}
        >
          <div className='dialog-header'>
            Dialog header
          </div>
          <div className='dialog-content'>
            Dialog content
          </div>
          <div className='dialog-buttons'>
            <Button type='text' onClick={() => dialogSetShow(false)}>Close</Button>
            <Button onClick={handleDialogButtonClick}>Test</Button>
          </div>
        </Dialog>
        }
      </div>
    </div>
  )
}

export default DemoDialog
