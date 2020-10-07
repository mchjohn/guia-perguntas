const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const connection = require('./database/dbconnection')
// const Question = require('./model/Question')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
  .authenticate()
  .then(() => {
    console.log("Successfully connected to the database.")
  }).catch((error) => {
    console.log("Error connecting to the database.", error)
  })

consign()
  .include('routes')
  .into(app)

app.listen(3000, () => {
  console.log('Server is running.')
})