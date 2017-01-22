import React from 'react'
import Card from './Card'

const CardList = ({ cards }) => {
  const cardList = cards.map(testname => (
    <Card
      {...testname}
      key={testname._id}
    />
  ))

  return (
    <div>
      {cardList}
    </div>
  )
}

export default CardList
