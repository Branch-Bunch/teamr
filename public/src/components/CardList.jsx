import React from 'react'
import Card from './Card'

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
      {cardList}
    </div>
  )
}

export default CardList
