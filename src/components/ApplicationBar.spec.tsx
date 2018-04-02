import * as React from 'react'
import { ApplicationBar } from '@/components/ApplicationBar'
import { mount } from 'enzyme'


describe('ApplicationBar', () => {
  it('is defined', () => {
    expect(ApplicationBar).toBeDefined()
  })

  it('renders properly', () => {
    const wrapper = mount(<ApplicationBar text='Pomodoro'/>)
    expect(wrapper.find('h2').contains('Pomodoro')).toEqual(true)
  })
  
})
