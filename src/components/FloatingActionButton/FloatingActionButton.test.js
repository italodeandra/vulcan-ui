import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'

import FloatingActionButton from './FloatingActionButton'

Enzyme.configure({adapter: new Adapter()})

describe('Component Floating Action Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FloatingActionButton/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('onClick is called after it is clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<FloatingActionButton onClick={onClick}/>)
    wrapper.find('button').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
})
