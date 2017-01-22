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
  console.log(profile_.json)
  const { name, bio, email, location } = profile._json
  const imageUrl = profile._json.avatar_url
  console.log(name, bio, email, location)
  Users.findOneAndUpdate(
    { email },
    {
      name,
      bio,
      email,
      location,
      imageUrl,
    },
    { upsert: true })
    .then(user => done(null, user))
    .catch(err => done(err))
}))

module.exports = passport
