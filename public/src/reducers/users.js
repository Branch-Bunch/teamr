import {
  UPDATE_USERS,
} from '../constants/ActionTypes'

const initialState = {
  users: {},
  usersById: [],
}

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      const users = action.users.reduce((acc, user) => ({
        ...acc,
        [user._id]: user,
      }), {})

      return {
        ...state,
        users,
      }
    default:
      return state
  }
}

export const usersById  = (state = initialState.usersById, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        usersById: action.users.map(user => user._id)
      }
    default:
      return state
  }
}
