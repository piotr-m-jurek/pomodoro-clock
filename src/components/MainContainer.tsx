import * as React from 'react'
import { Button, Grid } from 'material-ui'
import Typography from 'material-ui/Typography'
import { toTimerString } from '@/utils'
import './MainContainer.scss'
import { PomodoroProgress } from './PomodoroProgress'
import { ApplicationBar } from '@/components/ApplicationBar'

const container = {
  height: '100%'
}

const FULL_WORK_TIME = 25 * 60
const FULL_BREAK_TIME = 5 * 60


interface PomodoroState {
  isRunning: boolean
  isBreak: boolean
  secondsLeft: number
  focusTime: number
  breakTime: number
  timerId?: number
}

export class MainContainer extends React.Component<{}, PomodoroState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      isRunning: false,
      isBreak: false,
      secondsLeft: FULL_WORK_TIME,
      focusTime: FULL_WORK_TIME,
      breakTime: FULL_BREAK_TIME,
      timerId: undefined
    }
    this.startTimer = this.startTimer.bind(this)
    this.toggleTimer = this.toggleTimer.bind(this)
    this.decrease = this.decrease.bind(this)
    this.calculateProgress = this.calculateProgress.bind(this)
    this.clearTimerInterval = this.clearTimerInterval.bind(this)
  }

  calculateProgress (): number {
    return this.state.secondsLeft / (this.state.isBreak ? FULL_BREAK_TIME : FULL_WORK_TIME)
  }

  toggleTimer () {
    this.setState({
      isRunning: !this.state.isRunning,
    })
  }

  startTimer () {
    if (this.state.timerId != null) {
      this.clearTimerInterval()
    } else {
      this.setState({
        timerId: window.setInterval(this.decrease, 1000)
      })
    }
    this.toggleTimer()
  }

  clearTimerInterval () {
    window.clearInterval(this.state.timerId)
    this.setState({
      timerId: null
    })
  }

  decrease () {
    if (this.state.secondsLeft === 1) {
      this.setState({
        secondsLeft: this.state.isBreak ? FULL_WORK_TIME : FULL_BREAK_TIME,
        isBreak: !this.state.isBreak
      })
      this.startTimer()
    } else {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      })
    }
  }

  render () {
    return (
      <Grid container style={container} spacing={24}>
        <ApplicationBar text="Pomodoro" />
        <Grid
          container
          className="body"
          direction="column"
          alignItems="center"
          justify="center"
          spacing={24}
        >
          <Grid item>
            <PomodoroProgress
              radius={150}
              max={this.state.isBreak ? this.state.breakTime : this.state.focusTime}
              current={this.state.secondsLeft}
            >
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
                  <Button
                    variant="raised"
                    color="secondary"
                    onClick={this.startTimer}
                  >{this.state.isRunning ? 'Stop' : 'Start'}</Button>
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

