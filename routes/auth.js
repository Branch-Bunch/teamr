const express = require('express')
const githubPassport = require('../auth/github')

const router = express.Router()

router.get('/auth/github', githubPassport.authenticate('github', { scope: ['user:email'] }))

router.get('/auth/github/callback', githubPassport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
  res.send(req.user)
})

module.exports = router
