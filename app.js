// set express, port, handlebars, bodyParser
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// methodOverride
app.use(methodOverride('_method'))


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

// browse all restaurants
app.get('/', (req, res) => {
  Restaurant.find() //找全部資料
    .lean() //mongoose to array
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})



// create a new restaurant
app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  if (req.body.image === '') {
    req.body.image = undefined;
  }
  const { name, name_en, category, image, location, google_map, rating, phone, description } = req.body

  const restaurant = new Restaurant({
    name, name_en, category, image, location, google_map, rating, phone, description
  })

  restaurant.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// read details
app.get('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// edit data
app.get('/restaurants/:restaurantId/edit', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.put('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  const { name, name_en, category, image, location, google_map, rating, phone, description } = req.body

  Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = req.body.name,
      restaurant.name_en = req.body.name_en,
      restaurant.category = req.body.category,
      restaurant.image = req.body.image,
      restaurant.location = req.body.location,
      restaurant.phone = req.body.phone,
      restaurant.google_map = req.body.google_map,
      restaurant.rating = req.body.rating,
      restaurant.description = req.body.description,
      restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// delete a restaurant
app.delete('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id) //確保資料存在
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// search bar 
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  const keywordRegex = new RegExp(keyword, 'i')
  Restaurant.find({ $or: [{ category: { $regex: keywordRegex } }, { name: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants, keyword })
    })
})


// server start and listen
app.listen(port, () => {
  console.log(`running https://localhost:${port}`)
})