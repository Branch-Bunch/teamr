import {
  UPDATE_USERS,
  FETCH_USER,
} from '../constants/ActionTypes'

const initialState = {
  users: {},
  usersById: [],
  selectedUser: -1,
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
    case FETCH_USER:
      const id = action.users.id
      return { ...state, selectedUser: id }
    default:
      return state
  }
}

export const usersById  = (state = initialState.usersById, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return action.users.map(user => user._id)
    default:
      return state
  }
}
