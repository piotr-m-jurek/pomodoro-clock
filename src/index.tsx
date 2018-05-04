import StyledApp from '@/components/StyledApp'
import { getStore } from '@/store'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './globals.scss'

const Connect = () => (
  <Provider store={getStore()}>
    <StyledApp />
  </Provider>
)

render(<Connect />, document.getElementById('app'))
