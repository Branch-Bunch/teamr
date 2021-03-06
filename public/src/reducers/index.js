import { combineReducers } from 'redux'
import queries from './queries'
import { users, usersById, selectedUser } from './users'
import { teams, teamsById } from './teams'

export default combineReducers({
  queries,
  users,
  usersById,
  teams,
  teamsById,
  selectedUser,
})
