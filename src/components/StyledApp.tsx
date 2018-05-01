import { MainContainer } from '@/components/MainContainer'
import {
  createMuiTheme,
  MuiThemeProvider
} from 'material-ui'
import {
  cyan,
  orange
} from 'material-ui/colors'
import React from 'react'

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange
  }
})

export const StyledApp = () =>(
      <MuiThemeProvider theme={theme}>
        <MainContainer />
      </MuiThemeProvider>
    )
