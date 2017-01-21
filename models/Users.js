const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String },
})

const Users = mongoose.model('Users', usersSchema, 'Users')

module.exports = Users
