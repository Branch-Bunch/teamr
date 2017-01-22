import React from 'react'
import { connect } from 'react-redux'

// TODO: Impliment
const DetailedComponent = () => (
  <h1>
    DetailedComponent
  </h1>
)

const mapStateToProps = state => ({
  tab: state.queries.tab,
  user: state.users[state.selectedUser],
  team: state.teams[state.selectedTeam],
})

export default connect(
  mapStateToProps,
)(DetailedComponent)
