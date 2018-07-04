import PomodoroProgress from '@/components/PomodoroProgress'
import { StateButton } from '@/components/StateButton'
import { toTimerString } from '@/utils'
import { Button, Grid } from 'material-ui'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import './MainContainer.scss'

export class MainContainer extends React.Component<any, {}> {
  constructor(props: any) {
    super(props)

    this.toggleCountdown = this.toggleCountdown.bind(this)
    this.decrease = this.decrease.bind(this)
    this.calculateProgress = this.calculateProgress.bind(this)
    this.clearTimerInterval = this.clearTimerInterval.bind(this)
  }

  calculateProgress(): number {
    return this.props.secondsLeft / (this.props.isBreak ? this.props.breakTime : this.props.focusTime)
  }

  toggleCountdown() {
    if (this.props.timerId != null) {
      this.clearTimerInterval()
    } else {
      const id = window.setInterval(this.decrease, 1000)
      this.props.registerIntervalId(id)
    }
    this.props.toggleTimer()
  }

  clearTimerInterval() {
    window.clearInterval(this.props.timerId)
    this.props.clearIntervalId()
  }

  decrease() {
    if (this.props.secondsLeft === 1) {
      this.toggleCountdown()
      this.props.toggleBreak()
    } else {
      this.props.decrementTimer()
    }
  }

  render() {
    const { isBreak, breakTime, focusTime, secondsLeft, isRunning, resetState } = this.props

    return (
      <Grid container style={{ height: '100%' }} spacing={24}>
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
                    <Button variant='raised' color='primary' onClick={resetState}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </PomodoroProgress>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
