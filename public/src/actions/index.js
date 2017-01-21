import { TOGGLE } from '../constants/ActionTypes'

const toggleTab = tab => ({
  type: TOGGLE,
  queries: {
    tab,
  },
})

export default toggleTab
