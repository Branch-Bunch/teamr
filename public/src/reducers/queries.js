import {
  TOGGLE_TAB,
  USER,
} from '../constants/ActionTypes'

const initialState = {
  queries: {
    tab: USER,
    location: 'Ottawa',
    event: '',
  }
}

const queries = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return {
        ...state,
        [queries.tab]: action.tab,
      }
    default:
      return state
  }
}

export default queries
