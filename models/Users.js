const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userTeamSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
})

const usersSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String },
  team: { type: userTeamSchema },
})

const Users = mongoose.model('Users', usersSchema, 'Users')

module.exports = Users
