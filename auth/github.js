const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy
const Users = require('../models/Users')

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  Users.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err))
})

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENTID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.BASE_URL + process.env.GITHUB_CALLBACK_PATH,
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile)
  Users.findOneAndUpdate(
    { name: profile.displayName },
    { name: profile.displayName },
    { upsert: true })
    .then(user => done(null, user))
    .catch(err => done(err))
}))

module.exports = passport
