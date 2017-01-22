import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const Card = ({ picture, name, location, onClick }) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={4} md={3}>
        <Image src={picture} responsive />
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
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
