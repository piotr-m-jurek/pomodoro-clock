import * as React from 'react'
import { Toolbar, AppBar } from 'material-ui'
import Typography from 'material-ui/Typography'


interface ApplicationBarProps {
  text: string
}

export const ApplicationBar = ({ text }: ApplicationBarProps) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="title" color="inherit">
        { text }
      </Typography>
    </Toolbar>
  </AppBar>
)
