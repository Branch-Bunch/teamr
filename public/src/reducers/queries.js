import {
  TOGGLE,
  INDIVIDUAL,
} from '../constants/ActionTypes'

const initialState = {
  tab: INDIVIDUAL,
  location: 'Ottawa',
  event: '',
}

const queries = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      console.log({...state})
      return { ...state, [queries.tab]: action.tab, }
    default:
      return { ...state }
  }
}

export default queries
