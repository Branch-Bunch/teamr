const express = require('express')
const githubPassport = require('../auth/github')

const router = express.Router()

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/github')
}

router.get('/auth/github', githubPassport.authenticate('github', { scope: ['user:email'] }))

router.get('/auth/github/callback', githubPassport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
  res.send(req.user)
})

module.exports = {
  router,
  isLoggedIn,
}
