import * as React from 'react'
import { Toolbar, AppBar } from 'material-ui'
import Typography from 'material-ui/Typography'

export const ApplicationBar = ({ text }: {text: string}) => (
  <AppBar position='fixed'>
    <Toolbar>
      <Typography variant='title' color='inherit'>
        { text }
      </Typography>
    </Toolbar>
  </AppBar>
)
