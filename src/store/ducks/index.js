import { combineReducers } from 'redux'
import { reducer as authentication } from './authentication'
import { reducer as loading } from './loading'

export default combineReducers({
  authentication,
  loading,
})
