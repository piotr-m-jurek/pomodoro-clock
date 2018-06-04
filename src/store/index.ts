import { createStore } from 'redux'


const FULL_WORK_TIME = 25 * 60
const FULL_BREAK_TIME = 5 * 60


const DECREMENT_TIMER = 'DECREMENT_TIMER'

export const decrementTimerAction = () => ({
  type: DECREMENT_TIMER
})

const initialState = {
  breakTime: FULL_BREAK_TIME,
  focusTime: FULL_WORK_TIME,
  isBreak: false,
  isRunning: false,
  secondsLeft: FULL_WORK_TIME,
  sessionInfo: { sessionAmount: 3, currentSession: 0 },
  timerId: undefined as number
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DECREMENT_TIMER:
      return {...state, ...{secondsLeft: state.secondsLeft--} }
    default:
      return state
  }
}

let store: any

const initStore = () => {
  return createStore(reducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}
export const getStore = () => {
  if (!store) {
    store = initStore()
  }
  return store
}
