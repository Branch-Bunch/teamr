import {
  UPDATE_TEAMS,
} from '../constants/ActionTypes'

const initialState = {
  teams: {},
  teamsById: [],
}

export const teams = (state = initialState.teams, action) => {
  switch (action.type) {
    case UPDATE_TEAMS:
      const teams = action.teams.reduce((acc, team) => ({
        ...acc,
        [team._id]: team,
      }), {})
      return {
        ...state,
        teams,
      }
    default:
      return state
  }
}

export const teamsById = (state = initialState.teamsById, action) => {
  switch (action.type) {
    case UPDATE_TEAMS:
      return action.team.map(team => team._id)
    default:
      return state
  }
}
