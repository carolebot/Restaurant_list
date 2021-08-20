const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

router.use('/', home)
router.use('/restaurants', restaurants) //把路徑的/restaurants放這裡



module.exports = router