import { createStore, Store } from 'redux'

const FULL_WORK_TIME = 25 * 60
const FULL_BREAK_TIME = 5 * 60

interface SessionInfo {
  sessions: number
  currentSession: number
}

interface RootState {
  isRunning: false,
  isBreak: false,
  secondsLeft: number,
  focusTime: number,
  breakTime: number,
  timerId: number,
  sessionInfo: SessionInfo
}

const initialState: RootState = {
  isRunning: false,
  isBreak: false,
  secondsLeft: FULL_WORK_TIME,
  focusTime: FULL_WORK_TIME,
  breakTime: FULL_BREAK_TIME,
  timerId: undefined,
  sessionInfo: { sessions: 3, currentSession: 0 }
}
type TStore = Store<RootState>

const reducer = (state: RootState, action: any): RootState => {
  if (action) { return state }
  return state
}

let store: TStore = null
export const getStore = (): TStore => {
  if (!store) {
    store = initStore()
  }
  return store
}

export const initStore = (): TStore => {
  const env: any = window || {}
  const enhancer = env.devToolsExtension ? env.devToolsExtension() : (f: any) => f
  return createStore(reducer, initialState, enhancer)
}
