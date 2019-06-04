import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'

import Button from './Button'

configure({adapter: new Adapter()})

describe('Component Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('onClick is called after it is clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick} />)
    wrapper.find('button').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
})
