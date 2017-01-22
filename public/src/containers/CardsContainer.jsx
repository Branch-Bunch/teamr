import React from 'react'
import { connect } from 'react-redux'
import { toggleTab, fetchUser } from '../actions'
import { USER, TEAM } from '../constants/ActionTypes'
import CardList from '../components/CardList'

const CardContainer = ({ users, fetchUser }) => {
  return (
    <CardList
      cards={users}
      onClick={fetchUser}
    />
  )
}

const mapStateToProps = state => ({
  tab: state.queries.tab,
  users: state.usersById.map(id => state.users[id]),
  teams: state.teamsById.map(id => state.teams[id]),
})

export default connect(
  mapStateToProps,
  { toggleTab, fetchUser },
)(CardContainer)
