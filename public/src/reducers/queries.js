import {
  TOGGLE,
  USER,
} from '../constants/ActionTypes'

const initialState = {
  tab: USER,
  location: 'Ottawa',
  event: '',
}

const queries = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        [queries.tab]: action.tab,
      }
    default:
      return state
  }
}

export default queries
