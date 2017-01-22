import React from 'react'
import { connect } from 'react-redux'
import { toggleTab } from '../actions'
import { USER, TEAM } from '../constants/ActionTypes'
import CardList from '../components/CardList'

const CardContainer = ({ tab, users, teams }) => {
  switch (tab) {
    case USER: 
      return (
        <CardList
          cards={users}
        />
      )
    case TEAM:
      // TODO: Teamlist componet
      return
    default:
      return (
        <p>
          No Users or Teams!
        </p>
      )
}

const mapStateToProps = state => ({
  tab: state.queries.tab,
  users: state.usersById.map(id => state.users[id]),
  teams: state.teamsById.map(id => state.teams[id]),
})

export default connect(
  mapStateToProps,
  { toggleTab },
)(CardContainer)
