import React from 'react'
import Card from './Card'

const CardList = ({ cards }) => {
  const cardList = cards.map((card, index) => (
    <Card
      {...card}
      key={card._id}
    />
  ))
  return (
    <div>
      {cards}
    </div>
  )
}

export default CardList
