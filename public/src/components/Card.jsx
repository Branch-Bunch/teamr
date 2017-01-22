import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const Card = ({ name, location, imageUrl }) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={4} md={3}>
        <Image src={imageUrl} responsive />
      </Col>
      <Col xs={4} md={3}>
        {name}
      </Col>
      <Col xs={4} md={3}>
        {location}
      </Col>
    </Row>
  </Grid>
)

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
