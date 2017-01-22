import { 
  INDIVIDUAL, 
  FETCH_USER 
} from '../constants/ActionTypes'

const initialState = {
  name: 'unknown',
  picture: 'unknown',
  tags: ['PHP'],
  id: 'unknown',
}

const individuals = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:

    default:
      return { ...initialState }
  }
}
