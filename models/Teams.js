const mongoose = require('mongoose')
const Users = require('./Users') // dont know why import Users wont work
const Schema = mongoose.Schema

const teamsSchema = new Schema({
  _creator: { type: Schema.ObjectId, ref: Users},
  name: { type: String, required: true },
  members: [{ type: Schema.ObjectId, ref: Users}],
})

const Teams = mongoose.model('Teams', teamsSchema, 'Teams')

module.exports = Teams
