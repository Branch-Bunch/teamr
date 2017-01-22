import React from 'react'
import { connect } from 'react-redux'
import DetailedProfile from '../components/DetailedProfile'

// TODO: Impliment
const DetailedContainer = ({ user }) => (
    <DetailedProfile
      { ...user }
    />
)

const mapStateToProps = state => ({
  tab: state.queries.tab,
  user: state.users[state.selectedUser],
  team: state.teams[state.selectedTeam],
})

export default connect(
  mapStateToProps,
)(DetailedContainer)
