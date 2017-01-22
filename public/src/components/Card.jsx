import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const Card = ({ _id, name, location, imageUrl, onClick }) => (
    <Col
    style={{marginTop: "20px"}}
    lg={3}
    lgOffset={1}>
      <Row>
        <Image
          src={imageUrl}
          onClick={() => onClick(_id)}
          responsive
        />
        <div
        style={{fontWeight:"bold", color:"#ff8080"}}>
          {name + "  "}
        </div>
        <div
        style={{color:"#63f2f1"}}>
          {location}
        </div>
      </Row>
    </Col>
)

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
