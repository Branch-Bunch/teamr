const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
dotenv.config({ silent: true })

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})