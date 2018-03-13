import * as React from 'react'
import {
  createMuiTheme,
  MuiThemeProvider
} from 'material-ui'
import {
  pink,
  blue
} from 'material-ui/colors'
import { MainContainer } from '@/components/MainContainer'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue
  }
})

export const StyledApp = () =>(
      <MuiThemeProvider theme={theme}>
        <MainContainer />
      </MuiThemeProvider>
    )
