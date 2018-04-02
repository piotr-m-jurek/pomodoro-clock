import * as React from 'react'
import { shallow } from 'enzyme'
import { Title } from './Title'

describe('<Title />', () => {
  it('should exist', () => {
    expect(Title).toBeDefined()
  })
  it('renders properly to the screen', () => {
    const wrapper = shallow(<Title text='Hello react!' />)
    expect(wrapper.find('h1').contains('Hello react!')).toEqual(true)
  })
})
