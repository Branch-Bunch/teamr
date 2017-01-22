import React from 'react'
import { connect } from 'react-redux'
import DetailedProfile from '../components/DetailedProfile'

const DetailedContainer = ({ user }) => (
    <DetailedProfile
      {...user}
    />
)

const mapStateToProps = state => ({
  user: state.selectedUser,
})

export default connect(
  mapStateToProps,
)(DetailedContainer)
