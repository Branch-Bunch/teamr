import React from 'react'
import { connect } from 'react-redux'
import { toggleTab } from '../actions'

const TabContainer = () => ()

const mapStateToProps = state => ({
  queries: state.queries,
})

export default connect(
  mapStateToProps,
  { toggleTab },
)(TabContainer)

