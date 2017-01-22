import {
  UPDATE_USERS,
} from '../constants/ActionTypes'

const initialState = {
  users: {},
  usersById: [],
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      const users = action.users.reduce((acc, user) => ({
        ...acc,
        [user.id]: user,
      }), {})
      return {
        ...state,
        users,
        usersById: action.users.map(user => user.id)
      }
  }
}
