const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

dotenv.config({ silent: true })

const authRoutes = require('./routes/auth')

const app = express()
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = Promise

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.use('/', authRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
