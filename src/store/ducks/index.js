import { combineReducers } from 'redux'
import { reducer as questions } from './questions'
import { reducer as loading } from './loading'

export default combineReducers({
  questions,
  loading,
})
