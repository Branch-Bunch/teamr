import { TOGGLE } from '../constants/ActionTypes'

const toggleTab = tab =>
  dispatch => dispatch({
    type: TOGGLE,
    queries: {
      tab,
    },
  })

export default toggleTab
