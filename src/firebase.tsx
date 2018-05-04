import firebase, { auth, database, initializeApp } from 'firebase'

export const defaultConfig = {
  apiKey: 'AIzaSyD50L6YnNzV3tknbKwzgmoR9LbydQz39Qc',
  authDomain: 'pomodoro-tracker-24366.firebaseapp.com',
  databaseURL: 'https://pomodoro-tracker-24366.firebaseio.com',
  messagingSenderId: '774673138618',
  projectId: 'pomodoro-tracker-24366',
  storageBucket: 'pomodoro-tracker-24366.appspot.com'
}

export interface FirebaseDb {
  database: database.Database
  auth: auth.Auth
  provider: auth.GoogleAuthProvider
}

export let db: FirebaseDb
const getFirebaseDb = (firebaseConfig: typeof defaultConfig = defaultConfig): FirebaseDb => {
  if (db) {
    return db
  }
  initializeApp(firebaseConfig)
  return (db = {
    database: firebase.database(),
    auth: firebase.auth(),
    provider: new firebase.auth.GoogleAuthProvider()
  })
}
// TODO: Move to future store
getFirebaseDb()
