const express = require('express')
const Users = require('../models/Teams')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('route in development')
})

router.get('/:id', (req, res) => {
  res.send('route in development')
})

module.exports = {
  router,
}
