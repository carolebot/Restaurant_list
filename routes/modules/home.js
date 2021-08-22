const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


// browse all restaurants & search bar & sort
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  const sortBy = req.query.sortBy || 'name'
  const sortOrder = req.query.sortOrder || 'asc'
  const sortObject = {}
  sortObject[sortBy] = sortOrder
  Restaurant.find({
    $or: [{
      name: { $regex: keywordRegex }
    }, {
      category: { $regex: keywordRegex }
    }]
  })
    .lean()
    .sort(sortObject)
    .then(restaurants => {
      res.render('index', { restaurants, keyword, sortBy, sortOrder })
    })
    .catch(err => console.log(err))
})

module.exports = router