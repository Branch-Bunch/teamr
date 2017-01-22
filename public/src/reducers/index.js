import { combineReducers } from 'redux'
import queries from './queries'
import users from './users'
import teams from './teams'

export default combineReducers({
  queries,
  users,
  teams,
})
