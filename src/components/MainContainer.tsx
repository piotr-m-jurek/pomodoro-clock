import * as React from 'react'
import Typography from 'material-ui/Typography';
import {
  Button,
  Toolbar,
  AppBar,
  Grid,
  CircularProgress
} from 'material-ui'
import { toTimerString } from '@/utils';
import './MainContainer.scss'

const container = {
  height: '100%'
}

interface PomodoroState {
  isRunning: boolean
  isBreak: boolean
  secondsLeft: number
  focusTime: number
  breakTime: number
}

export class MainContainer extends React.Component<{}, PomodoroState> {
  constructor (props: {}) {
    super (props)
    this.state = {
      isBreak: true,
      isRunning: false,
      secondsLeft: 25 * 60,
      focusTime: 25 * 60,
      breakTime: 5 * 60
    }
  }

  render () {
    return (
      <Grid container style={container} spacing={24}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Pomodoro
              </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          className="body"
          direction="column"
          alignItems="center"
          justify="center"
          spacing={16}
          >
            <Grid item>
              <CircularProgress size={100} value={90} variant="static" />
            </Grid>
            <Grid item>
              <Typography variant="display2">{toTimerString(this.state.secondsLeft)}</Typography>
            </Grid>
            <Grid item>
              <Button variant="raised" color="secondary">{this.state.isRunning ? 'Stop' : 'Start'}</Button>
            </Grid>
        </Grid>
      </Grid>
    )
  }

}

