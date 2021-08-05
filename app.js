// set express
const express = require('express')
const app = express()

// set port 
const port = 3000

// set tools
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')



// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set static file
app.use(express.static('public'))



// set route
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  // console.log(req.params.restaurant_id)
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.toLowerCase().includes(keyword)
  })
  if (!restaurants.length) {
    return res.render('noresult', { restaurants: restaurants, keyword: keyword })
  }
  res.render('index', { restaurants: restaurants, keyword: keyword })
})



// server start and listen
app.listen(port, () => {
  console.log(`running https://localhost:${port}`)
})