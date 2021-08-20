// set express, port, handlebars, bodyParser
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const routes = require('./routes') //預設會找底下的index.js
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// methodOverride
app.use(methodOverride('_method'))


// routes
app.use(routes)


// mongodb and mongoose ///////////////////
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')
})



// setting routes ////////////






// server start and listen
app.listen(port, () => {
  console.log(`running https://localhost:${port}`)
})