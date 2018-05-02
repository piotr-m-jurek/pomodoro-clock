import PomodoroProgress from '@/components/PomodoroProgress'
import { StateButton } from '@/components/StateButton'
import { toTimerString } from '@/utils'
import { Button, Grid } from 'material-ui'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import './MainContainer.scss'

const FULL_WORK_TIME = 25 * 60
const FULL_BREAK_TIME = 5 * 60

interface ISession {
  sessionAmount: number
  currentSession: number
}

interface IPomodoroState {
  isRunning: boolean
  isBreak: boolean
  secondsLeft: number
  focusTime: number
  breakTime: number
  timerId: number | null
  sessionInfo: ISession
}

const initialState: IPomodoroState = {
  isRunning: false,
  isBreak: false,
  secondsLeft: FULL_WORK_TIME,
  focusTime: FULL_WORK_TIME,
  breakTime: FULL_BREAK_TIME,
  timerId: undefined,
  sessionInfo: { sessionAmount: 3, currentSession: 0 }
}

export class MainContainer extends React.Component<{}, IPomodoroState> {
  constructor(props: {}) {
    super(props)
    this.state = initialState

    this.toggleCountdown = this.toggleCountdown.bind(this)
    this.toggleTimer = this.toggleTimer.bind(this)
    this.decrease = this.decrease.bind(this)
    this.calculateProgress = this.calculateProgress.bind(this)
    this.clearTimerInterval = this.clearTimerInterval.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  resetState() {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  calculateProgress(): number {
    return this.state.secondsLeft / (this.state.isBreak ? FULL_BREAK_TIME : FULL_WORK_TIME)
  }

  toggleTimer() {
    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  toggleCountdown() {
    if (this.state.timerId != null) {
      this.clearTimerInterval()
    } else {
      this.setState({
        timerId: window.setInterval(this.decrease, 1000)
      })
    }
    this.toggleTimer()
  }

  clearTimerInterval() {
    window.clearInterval(this.state.timerId)
    this.setState({
      timerId: null
    })
  }

  decrease() {
    if (this.state.secondsLeft === 1) {
      this.setState({
        secondsLeft: this.state.isBreak ? FULL_WORK_TIME : FULL_BREAK_TIME,
        isBreak: !this.state.isBreak
      })
      this.toggleCountdown()
    } else {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      })
    }
  }

  render() {
    const { isBreak, breakTime, focusTime, secondsLeft, isRunning } = this.state

    return <Grid container style={{ height: '100%' }} spacing={24}>
        <Grid container className='body' direction='column' alignItems='center' justify='center' spacing={16}>
          <Grid item>
            <PomodoroProgress radius={150} max={isBreak ? breakTime : focusTime} current={secondsLeft}>
              <Grid container direction='column' alignItems='center' justify='center' spacing={40}>
                <Grid item>
                  <Typography variant='display2'>{toTimerString(secondsLeft)}</Typography>
                </Grid>
                <Grid item container direction='row' justify='center' spacing={8}>
                  <Grid item>
                    <StateButton
                      handleChange={this.toggleCountdown}
                      phase={isBreak ? 'Break' : 'Focus'}
                      isRunning={isRunning}
                    />
                  </Grid>
                  <Grid item>
                    <Button variant='raised' color='primary' onClick={this.resetState}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </PomodoroProgress>
          </Grid>
        </Grid>
      </Grid>
  }
}
