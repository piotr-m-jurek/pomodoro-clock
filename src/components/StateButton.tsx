import { Button, Grid } from 'material-ui'
import * as React from 'react'

export const StateButton = (
  {isRunning, phase, handleChange}:
  { isRunning: boolean, phase: string, handleChange (): void }
) => (
  <Grid item>
    <Button
      variant='raised'
      color='secondary'
      onClick={ handleChange }
    >{ isRunning ? 'Stop ' : 'Start ' } { phase }</Button>
  </Grid>
)
