import { Button } from 'material-ui'
import * as React from 'react'
import { db } from '../firebase'
import * as style from './SignIn.scss'

export const SignIn = () => {
  const signIn = () => db.auth.signInWithPopup(db.provider)
  return (
    <div className='sign-in'>
      <Button style={style.btnSignin} variant='raised' onClick={signIn} onTouchEnd={signIn}>
        Sign In
      </Button>
    </div>
  )
}
