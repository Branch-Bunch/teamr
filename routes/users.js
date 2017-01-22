const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

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
