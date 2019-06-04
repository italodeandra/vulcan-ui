import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'

import Spinner from './Spinner'

Enzyme.configure({adapter: new Adapter()})

describe('Component Spinner', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Spinner/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
