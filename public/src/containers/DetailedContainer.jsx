import React from 'react'
import { connect } from 'react-redux'

// TODO: Impliment
const DetailedComponent () => ()

const mapStateToProps = state => ({
  tab: state.queries.tab,
  user: state.users[state.selectedUser],
  team: state.teams[state.selectedTeam]
})

export default connect(
  mapStateToProps,
)(DetailedComponent)
