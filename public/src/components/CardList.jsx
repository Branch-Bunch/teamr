import React from 'react'
import Card from './Card'

const CardList = ({ cards }) => (
  cards.map((card, index) => (
    <Card
      {...card}
      key={card._id}
      index={index + 1}
    />
  ))
)

export default CardList
