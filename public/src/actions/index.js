import {
  TOGGLE_TAB,
  UPDATE_USERS,
} from '../constants/ActionTypes'

export const toggleTab = tab => (
  dispatch => dispatch({
    type: TOGGLE,
    tab,
  })
)

export const updateUsers = () => dispatch => {
  return fetch('/users')
    .then(res => res.json())
    .then(users => dispatch({ type: UPDATE_USERS, users })
}
