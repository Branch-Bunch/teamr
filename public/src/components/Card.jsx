import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
const Card = ({ picture, name, location, onClick }) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={4} md={3}><code><Image src="https://pbs.twimg.com/profile_images/682613522874953728/ybGzPb9o.jpg" responsive /></code></Col>
      <Col xs={4} md={3}><code>{name}</code></Col>
      <Col xs={4} md={3}><code>{location}</code></Col>
    </Row>
  </Grid>
)
Link.propTypes = {
  picture: PropTypes.element,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Card
