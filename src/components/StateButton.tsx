import * as React from 'react'
import { Button, Grid } from 'material-ui'

export const StateButton = ({isRunning ,phase, handleChange}: {isRunning: boolean, phase: string, handleChange (): void}) => (
  <Grid item>
    <Button
      variant="raised"
      color="secondary"
      onClick={handleChange}
    >{isRunning ? 'Stop ' : 'Start '} {phase}</Button>
  </Grid>
)
