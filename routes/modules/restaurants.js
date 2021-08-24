const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


// create a new restaurant
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => { 
  const inputImage = req.body.image || "https://www.ristobartwentyfive.com/wp-content/uploads/2019/07/restaurant-food-salat-2.jpg"
  const { name, name_en, category, location, google_map, rating, phone, description } = req.body

  const restaurant = new Restaurant({
    name, name_en, category, image: inputImage, location, google_map, rating, phone, description
  })

  restaurant.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// read details
router.get('/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// edit data
router.get('/:restaurantId/edit', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  const { name, name_en, category, image, location, google_map, rating, phone, description } = req.body

  Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name,
        restaurant.name_en = name_en,
        restaurant.category = category,
        restaurant.image = image,
        restaurant.location = location,
        restaurant.phone = phone,
        restaurant.google_map = google_map,
        restaurant.rating = rating,
        restaurant.description = description,
        restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// delete a restaurant
router.delete('/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  Restaurant.findById(id) //確保資料存在
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router