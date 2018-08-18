import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  org: ""
}

export const actionTypes = {
  UPORG: 'UPORG',
  GORG: 'GORG'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  let rVal = action.org;
  switch (action.type) {
    case actionTypes.UPORG:
      return Object.assign({}, state, {
        org: rVal
      })
    case actionTypes.GORG:
      return state.org
    default: return state
  }
}

// ACTIONS
// export const serverRenderClock = (isServer) => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = dispatch => {
//   return setInterval(() => {
//     // Dispatch `TICK` every 1 second
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// }

export const updateOrg = (org) => dispatch => {
  return dispatch({ type: actionTypes.UPORG, org: org })
}

export const getOrg = () => dispatch => {
  return dispatch({ type: actionTypes.GORG })
}

// export const resetCount = () => dispatch => {
//   return dispatch({ type: actionTypes.RESET })
// }

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
