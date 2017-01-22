import React from 'react'
import { connect } from 'react-redux'
import { toggleTab } from '../actions'

const CardContainer = () => ()

const mapStateToProps = state => ({
  queries: state.queries,
})

export default connect(
  mapStateToProps,
  { toggleTab },
)(CardContainer)

