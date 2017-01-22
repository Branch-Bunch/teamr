import React, { PropTypes } from 'react'
import { Grid, Row, Image } from 'react-bootstrap'

const DetailedProfile = ({
  imageUrl,
  bio,
  name,
  email,
  location,
}) => (
  <Grid>
    <Row>
      <Image 
        src={imageUrl}
      />
    </Row>
    <Row>
      {name}
    </Row>
    <Row>
      {bio}
    </Row>
    <Row>
      {email}
    </Row>
    <Row>
      {location}
    </Row>
  </Grid>
)

DetailedProfile.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  // TODO add tags as array of strings
}

export default DetailedProfile
