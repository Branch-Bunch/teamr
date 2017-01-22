import React, { PropTypes } from 'react'

import { Grid, Row, Image } from 'react-bootstrap'

const DetailedProfile = ({ imageUrl, bio, name, }) => (
  <Grid>
    <Row className='detailed-grid'>
      <Image 
        src={imageUrl}
      />
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
