require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const emailController = require('./email/email.controller')
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')

app.use(cors({
  origin: CLIENT_ORIGIN
}))

app.use(express.json())


app.get('/wake-up', (req, res) => res.json('👌'))

app.post('/email', emailController.collectEmail)

app.get('/email/confirm/:id', emailController.confirmEmail)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}


// Connecting the database and then starting the app.
mongoose.connect(DB_URL, options, () => {
  app.listen(PORT, () => console.log('👍'))
})
// The most likely reason connecting the database would error out is because 
// Mongo has not been started in a separate terminal.
// 
// .catch(err => console.log(err))