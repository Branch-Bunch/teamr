import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const Card = ({ _id, name, location, imageUrl, onClick }) => (
  <div style={{marginTop: "20px"}}>
    <Col md={2} mdOffset{1}>
      <Row>
        <Image
          src={imageUrl}
          onClick={() => onClick(_id)}
        />
      </Row>
        {name}
        {location}
      </Row>
    </Col>
  </div>
)

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
