import React from 'react'
import { connect } from 'react-redux'

const DetailedComponent () => ()

const mapStateToProps = state => ({
  user: state.users[state.selectedUser],
  team: state.teams[state.selectedTeam]
})

export default connect(
  mapStateToProps,
)(DetailedComponent)
