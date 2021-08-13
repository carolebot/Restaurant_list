// set express, port, handlebars, bodyParser
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const mongoose = require('mongoose')


// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


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
app.get('/', (req, res) => {
  Restaurant.find() //找全部資料
    .lean() //mongoose to array
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image || "https://www.ristobartwentyfive.com/wp-content/uploads/2019/07/restaurant-food-salat-2.jpg",
    location: req.body.location,
    google_map: req.body.google_map || 'No Data',
    rating: req.body.rating,
    phone: req.body.phone,
    description: req.body.description
  })
  
  restaurant.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.get('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})


app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.toLowerCase().includes(keyword)
  })

  res.render('index', { restaurants: restaurants, keyword: keyword })
})


// server start and listen
app.listen(port, () => {
  console.log(`running https://localhost:${port}`)
})