const initialState = {
  tab: 'Individuals',
  location: 'Ottawa',
  event: '',
}

const queries = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [queries.tab]: action.tab,
      }
  }
  return { ...state }
}

export default queries
