import React, {useState} from 'react'
import {Button, Form, TextField} from 'vulcan-ui'
import './DemoForm.scss'

function DemoForm() {
  const [formFieldIdentifier, setFormFieldIdentifier] = useState(null)
  const [formFieldPassword, setFormFieldPassword] = useState(null)

  function handleSubmit() {
    // eslint-disable-next-line no-undef
    alert(`formField: ${formFieldIdentifier}`)
  }

  return (
    <div className='view-DemoForm'>
      <h2>Demo Form</h2>
      <div className='example'>
        <Form
          onSubmit={handleSubmit}
        >
          <TextField
            id='identifier'
            name='identifier'
            label='E-mail'
            defaultValue={formFieldIdentifier}
            onChange={newValue => setFormFieldIdentifier(newValue)}
            validation={{required: 'Fill this field'}}
          />
          <TextField
            type='password'
            id='password'
            name='password'
            label='Password'
            defaultValue={formFieldPassword}
            onChange={newValue => setFormFieldPassword(newValue)}
            validation={{required: 'Fill this field'}}
          />

          <Button submit={true}>Send</Button>
        </Form>
      </div>
    </div>
  )
}

export default DemoForm
