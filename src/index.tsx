import { MainContainer } from '@/components/MainContainer'
import { db } from '@/firebase'
import { createMuiTheme, MuiThemeProvider } from 'material-ui'
import { cyan, orange } from 'material-ui/colors'
import * as React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { SignIn } from './components/SignIn'
import './globals.scss'
import {
  clearIdAction,
  decrementTimerAction,
  getStore,
  registerIdAction,
  resetStateAction,
  toggleBreakAction,
  toggleTimerAction,
  User
} from './store/index'

class StoreApp extends React.Component<{}, { currentUser: User }> {
  constructor(props: any) {
    super(props)
    this.state = { currentUser: null }
  }

  componentDidMount() {
    db.auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser })
    })
  }

  render() {
    const user = this.state.currentUser
    return user ? (
      <Provider store={getStore()}>
        <ConnectedApp />
      </Provider>
    ) : (
      <SignIn />
    )
  }
}

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange
  }
})

const StyledApp = () => (
  <MuiThemeProvider theme={theme}>
    <StoreApp />
  </MuiThemeProvider>
)

const mapStateToProps = (state: any) => ({
  isRunning: state.pomodoro.isRunning,
  isBreak: state.pomodoro.isBreak,
  breakTime: state.pomodoro.breakTime,
  focusTime: state.pomodoro.focusTime,
  secondsLeft: state.pomodoro.secondsLeft,
  timerId: state.pomodoro.timerId
})

const mapDispatchToProps = (dispatch: any): any => ({
  decrementTimer: () => dispatch(decrementTimerAction()),
  toggleTimer: () => dispatch(toggleTimerAction()),
  resetState: () => dispatch(resetStateAction()),
  clearIntervalId: () => dispatch(clearIdAction()),
  registerIntervalId: (id: any) => dispatch(registerIdAction(id)),
  toggleBreak: () => dispatch(toggleBreakAction())
})
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

render(<StyledApp />, document.getElementById('app'))
