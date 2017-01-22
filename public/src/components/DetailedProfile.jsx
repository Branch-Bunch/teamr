import React, { PropTypes } from 'react'
import { Grid, Row, Image } from 'react-bootstrap'

const DetailedProfile = ({
  imageUrl,
  bio,
  name,
  email,
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
      <p>
        Contact me: {email}
      </p>
    </Row>
  </Grid>
)

DetailedProfile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  // TODO add tags as array of strings
}

export default DetailedProfile
