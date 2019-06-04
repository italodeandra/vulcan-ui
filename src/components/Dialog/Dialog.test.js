import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'

import Dialog from './Dialog'

configure({adapter: new Adapter()})

describe('Component Dialog', () => {
  it('renders without crashing', () => {
    const spyFunc = jest.fn()
    // mock "document" for the portal
    Object.defineProperty(global.document, 'body', {
      value: {
        insertBefore: spyFunc,
        lastElementChild: spyFunc
      }
    })

    const div = document.createElement('div')
    ReactDOM.render(<Dialog />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('onClick of a button inside the dialog is called after it is clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Dialog>
      <button onClick={onClick} />
    </Dialog>)
    wrapper.find('button').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
})
