import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { toMinuteFormat } from '../../utils'

const MINUTES_25 = 25 * 60

export default class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.startTimer = this.startTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.state = {
      timer: MINUTES_25,
      running: false,
      intervalId: undefined
    }
  }

  resetTimer () {
    clearInterval(this.state.intervalId)
    this.setState({
      timer: MINUTES_25,
      running: false,
      intervalId: null
    })

  }
  startTimer () {
    if (this.state.intervalId != null) {
      this.resetTimer()
    }
    let id = setInterval(() => {
      this.setState({
        timer: this.state.timer -= 1
      })
    }, 1000)

    this.setState({
      running: true,
      intervalId: id
    })
  }
  render () {
      return (
        <div>
          <h1>{toMinuteFormat(this.state.timer)}</h1>
          <RaisedButton onClick={this.startTimer}>{this.state.running ? 'Reset' : 'Start'}</RaisedButton>
          <RaisedButton onClick={this.resetTimer}>Stop</RaisedButton>
        </div>
      )
  }
}


