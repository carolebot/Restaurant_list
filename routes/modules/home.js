const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


// browse all restaurants
router.get('/', (req, res) => {
  Restaurant.find() //找全部資料
    .lean() //mongoose to array
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router