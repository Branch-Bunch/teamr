import {
  UPDATE_USERS,
  FETCH_USER,
} from '../constants/ActionTypes'

const initialState = {
  users: {},
  usersById: [],
  selectedUser: {},
  selectedTeam: -1,
}

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      const users = action.users.reduce((acc, user) => ({
        ...acc,
        [user._id]: user,
      }), state.users)
      return users
    default:
      return state
  }
}

export const usersById = (state = initialState.usersById, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return action.users.map(user => user._id)
    default:
      return state
  }
}

export const selectedUser = (state = initialState.selectedUser, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.user
    default: 
      return state
  }
}
