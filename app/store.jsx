import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { whoami } from './action-creators/auth'

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

export default store

store.dispatch(whoami())
