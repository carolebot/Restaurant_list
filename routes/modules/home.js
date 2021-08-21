const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


// browse all restaurants & search bar & sort
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  const sortBy = req.query.sortBy
  const sortOrder = req.query.sortOrder
  const sortObject = {};
  sortObject[sortBy] = sortOrder
  Restaurant.find({
    $or: [{
      category: { $regex: keywordRegex }
    }, {
      name: { $regex: keywordRegex }
    }]
  })
    .lean()
    .sort(sortObject)
    .then(restaurants => {
      res.render('index', { restaurants, keyword, sortBy, sortOrder })
    })
    .catch(error => console.log(error))
})

module.exports = router