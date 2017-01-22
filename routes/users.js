const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

function getUsers() {
  return new Promise((resolve, reject) => {
    Users.find()
    .then( users => console.log(users))
  })
}

const FakeUsers = [
  {
    "_id": "5883f32b70784004307bbe5e",
    "name": "Jacky Chiu",
    "bio": "node mentor",
    "email": "idkhowtospell@gmail.com",
    "location": "Ottawa, ON",
    "imageUrl": "shiptoproduction.jpg",
    "__v": 0
  }
]



router.get('/', (req, res) => {
  //Users.find()
  //  .then(users => res.send(users))
  const normalized = FakeUsers.map((user) => {
    return {
      name: user.name,
      location: user.location,
      imageUrl: user.imageUrl,
    }
  })
  res.send(normalized)
})

module.exports = {
  router
}
