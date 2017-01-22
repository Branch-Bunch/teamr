import {
  TOGGLE_TAB,
  UPDATE_USERS,
  FETCH_USER,
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
    .then(users => dispatch({ type: UPDATE_USERS, users }))
    .catch(err => console.log(err))
}

export const fetchUser = id => dispatch => {
  return fetch(`/users/${id}`)
    .then(res => res.json())
    .then(user => dispatch({ type: FETCH_USER, user }))
    .catch(err => console.log(err))
}
