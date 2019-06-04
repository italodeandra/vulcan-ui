import React, {useRef, useState} from 'react'
import {Button, TextField} from 'vulcan-ui'

function DemoTextField() {
  const [testField, setTestField] = useState(undefined)
  const customError = useRef(null)

  function handleCustomFieldErrorButtonClick() {
    customError.current.set({
      errorMessage: 'E-mail não cadastrado'
    })
  }

  return (
    <div className='view-DemoTextField'>
      <h2>Demo Text Field</h2>
      <div>
        <TextField
          onCustomError={customError}
          label='Text field'
          required
          tip='This is a tip'
          defaultValue={testField}
          onChange={newValue => setTestField(newValue)}
        />
      </div>
      <div>
        <pre>Text field value: {testField}</pre>
      </div>
      <div>
        <Button onClick={handleCustomFieldErrorButtonClick}>Custom field error</Button>
      </div>
    </div>
  )
}

export default DemoTextField
