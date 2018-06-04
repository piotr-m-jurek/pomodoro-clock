import { MainContainer } from '@/components/MainContainer'
import { db } from '@/firebase'
import { createMuiTheme, MuiThemeProvider } from 'material-ui'
import { cyan, orange } from 'material-ui/colors'
import * as React from 'react'
import { SignIn } from './SignIn'

import { connect, Provider } from 'react-redux'
import { decrementTimerAction, getStore } from '../store/index'


const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange
  }
})

interface User {
  displayName: string
  email: string
  userId?: string
  photoURL?: string
}

export default class StyledApp extends React.Component<{}, { currentUser: User }> {
  constructor(props: any) {
    super(props)
    this.state = { currentUser: null }
  }

  componentDidMount () {
    db.auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser })
    })
  }

  render() {



    const mapStateToProps = (): any => ({
    })

    const mapDispatchToProps = (dispatch: any): any => ({
      decrementTimer: () => dispatch(decrementTimerAction())
    })

    const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(MainContainer)



    const user = this.state.currentUser
    return <MuiThemeProvider theme={theme}>
        {user ? <Provider store={getStore()}>
            <ConnectedApp />
          </Provider> : <SignIn />}
      </MuiThemeProvider>
  }
}
