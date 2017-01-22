import {
  UPDATE_TEAMS,
} from '../constants/ActionTypes'

const initialState = {
  teams: {},
  teamsById: [],
}

const teams = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAMS:
      const teams = action.teams.reduce((acc, team) => ({
        ...acc,
        [team._id]: team,
      }), {})
      return {
        ...state,
        teams,
        teamsById: action.team.map(team => team._id)
      }
    default:
      return state
  }
}

export default teams
