import * as React from 'react'
import Typography from 'material-ui/Typography';
import {
  Button,
  Toolbar,
  AppBar,
  Grid
} from 'material-ui'
import { toTimerString } from '@/utils';
import './MainContainer.scss'
import { PomodoroProgress } from './PomodoroProgress'
import { ChangeEvent } from 'react';

const container = {
  height: '100%'
}

interface PomodoroState {
  isRunning: boolean
  isBreak: boolean
  secondsLeft: number
  focusTime: number
  breakTime: number
  progress: number
}

export class MainContainer extends React.Component<{}, PomodoroState> {
  constructor (props: {}) {
    super (props)
    this.state = {
      isBreak: true,
      isRunning: false,
      secondsLeft: 25 * 60,
      focusTime: 25 * 60,
      breakTime: 5 * 60,
      progress: 65
    }
    this.changeProgress = this.changeProgress.bind(this)
  }

  changeProgress(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      progress: parseInt(e.target.value, 10)
    })
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
            <PomodoroProgress radius={150} percentage={this.state.progress}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={40}
                >
                  <Grid item>
                    <Typography variant="display2">{toTimerString(this.state.secondsLeft)}</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="raised" color="secondary">{this.state.isRunning ? 'Stop' : 'Start'}</Button>
                  </Grid>
                </Grid>
              </PomodoroProgress>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
      </Grid>
    )
  }

}

