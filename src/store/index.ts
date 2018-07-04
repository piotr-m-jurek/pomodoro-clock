import { combineReducers, createStore } from 'redux'

const FULL_WORK_TIME = 25 * 60
const FULL_BREAK_TIME = 5 * 60

const DECREMENT_TIMER = 'DECREMENT_TIMER'
const TOGGLE_TIMER = 'TOGGLE_TIMER'
const TOGGLE_BREAK = 'TOGGLE_BREAK'
const RESET_STATE = 'RESET_STATE'
const CLEAR_INTERVAL_ID = 'CLEAR_INTERVAL_ID'
const REGISTER_INTERVAL_ID = 'REGISTER_INTERVAL_ID'
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

export const decrementTimerAction = () => ({ type: DECREMENT_TIMER })
export const toggleTimerAction = () => ({ type: TOGGLE_TIMER })
export const resetStateAction = () => ({ type: RESET_STATE })
export const clearIdAction = () => ({ type: CLEAR_INTERVAL_ID })
export const registerIdAction = (payload: any) => ({ type: REGISTER_INTERVAL_ID, payload })
export const toggleBreakAction = () => ({ type: TOGGLE_BREAK })

export const loginAction = (payload: any) => ({ type: LOG_IN, payload })
export const logoutAction = () => ({ type: LOG_OUT })

export interface User {
  displayName: string
  email: string
  userId?: string
  photoURL?: string
}

interface AppState {
  pomodoro: PomodoroState
  user: User
}

const initialState: AppState = {
  user: {
    displayName: null,
    email: null,
    userId: null,
    photoURL: null
  },
  pomodoro: {
    breakTime: FULL_BREAK_TIME,
    focusTime: FULL_WORK_TIME,
    isBreak: false,
    isRunning: false,
    secondsLeft: FULL_WORK_TIME,
    sessionInfo: { sessionAmount: 3, currentSession: 0 },
    timerId: undefined as any
  }
}

const pomodoro = (state = initialState.pomodoro, action: any) => {
  switch (action.type) {
    case DECREMENT_TIMER:
      return { ...state, ...{ secondsLeft: state.secondsLeft - 1 } }
    case TOGGLE_TIMER:
      return { ...state, ...{ isRunning: !state.isRunning } }
    case RESET_STATE:
      return { ...state, initialState }
    case CLEAR_INTERVAL_ID:
      return { ...state, ...{ timerId: null } }
    case REGISTER_INTERVAL_ID:
      return { ...state, ...{ timerId: action.payload } }
    case TOGGLE_BREAK:
      return {
        ...state,
        ...{ isBreak: !state.isBreak, secondsLeft: state.isBreak ? state.focusTime : state.breakTime }
      }
    default:
      return state
  }
}
const user = (state = initialState.user, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

let store: any
const initStore = () => {
  return createStore(
    combineReducers({ pomodoro, user }),
    initialState as any,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export const getStore = () => {
  if (!store) {
    store = initStore()
  }
  return store
}

interface Session {
  sessionAmount: number
  currentSession: number
}

interface PomodoroState {
  isRunning: boolean
  isBreak: boolean
  secondsLeft: number
  focusTime: number
  breakTime: number
  timerId: number | null
  sessionInfo: Session
}
