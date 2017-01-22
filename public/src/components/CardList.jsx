import React from 'react'
import Card from './Card'
import { Grid, Row, Col } from 'react-bootstrap'

const CardList = ({ cards, onClick }) => {
  const cardList = cards.map(testname => (
    <Card
      {...testname}
      onClick={onClick}
      key={testname._id}
    />
  ))

  return (
    <div>
      <Col>
          {cardList}
      </Col>
    </div>
  )
}

export default CardList
