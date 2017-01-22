import React, { PropTypes } from 'react'
import { Grid, Col, Row, Image } from 'react-bootstrap'

const DetailedProfile = ({
  imageUrl,
  bio,
  name,
  email,
  location,
}) => (
  <Grid>
  <Col lg={4}>
      <Row lg={4}>
        <Image
          src={imageUrl}
          responsive
          style={{marginTop: "20px"}}
        />
      </Row>
      <Row lg={3}
        style={{
        fontWeight:"bold",
        color:"#ff8080",
        fontSize:"30"}}>
        {name}
      </Row>
      <Row lg={3} style={{color:"#62d196"}}>
        {bio}
      </Row>
      <Row lg={3} style={{color:"#c991e1"}}>
        {email}
      </Row>
      <Row lg={3} style={{color:"#63f2f1"}}>
        {location}
      </Row>
    </Col>
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
