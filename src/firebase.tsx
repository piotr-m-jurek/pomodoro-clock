import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD50L6YnNzV3tknbKwzgmoR9LbydQz39Qc',
  authDomain: 'pomodoro-tracker-24366.firebaseapp.com',
  databaseURL: 'https://pomodoro-tracker-24366.firebaseio.com',
  messagingSenderId: '774673138618',
  projectId: 'pomodoro-tracker-24366',
  storageBucket: 'pomodoro-tracker-24366.appspot.com'
}
firebase.initializeApp(config)

export default config
export const db = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
