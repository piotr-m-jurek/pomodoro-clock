import { AppBar, Toolbar } from 'material-ui'
import Typography from 'material-ui/Typography'
import * as React from 'react'

export const ApplicationBar = ({ text }: {text: string}) => (
  <AppBar position='fixed'>
    <Toolbar>
      <Typography variant='title' color='inherit'>
        { text }
      </Typography>
    </Toolbar>
  </AppBar>
)
