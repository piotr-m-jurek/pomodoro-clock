import * as React from 'react'
import {
  createMuiTheme,
  MuiThemeProvider
} from 'material-ui'
import { MainContainer } from '@/components/MainContainer'
import {
  cyan,
  orange
} from 'material-ui/colors'

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
