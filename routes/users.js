const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

/*
 * Used for testing purposes, no more push to production 2016
const FakeUsers = [
  {
    "_id": "5883f32b70784004307bbe5e",
    "name": "Jacky Chiu",
    "bio": "node mentor",
    "email": "idkhowtospell@gmail.com",
    "location": "Ottawa, ON",
    "imageUrl": "shiptoproduction.jpg",
    "__v": 0
  },
  {
    "_id": "asdhauifh3rh2389h32fh",
    "name": "Vikram",
    "bio": "node mentee",
    "email": "idkhowtospelleaither@gmail.com",
    "location": "Ottawa, ON",
    "imageUrl": "testonproduction.jpg",
    "__v": 0
  },
]
*/

router.get('/', (req, res) => {
  Users.find()
    .lean()
    .then((users) => {
      const normalized = users.map((user) => {
        return {
          _id: user._id,
          name: user.name,
          location: user.location,
          imageUrl: user.imageUrl,
        }
      })
      res.send(normalized)
    })
})

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
    .lean()
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      res.status(500).send({
        err: err.toString(),
        givens: req.params,
      })
    })
})

module.exports = {
  router,
}
