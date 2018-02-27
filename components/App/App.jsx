import React, { Component } from 'react'
import './app.css'
import MainContainer from '../MainContainer/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <MainContainer />
      </MuiThemeProvider>
    )
  }
}
