import { combineReducers } from 'redux'
import queries from './queries'
import users from './users'

export default combineReducers({
  queries,
  users,
})
