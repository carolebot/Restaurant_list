const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  name_en: { type: String },
  category: { type: String, required: true },
  image: { type: String, default: "https://www.ristobartwentyfive.com/wp-content/uploads/2019/07/restaurant-food-salat-2.jpg" },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  google_map: { type: String },
  rating: { type: Number, min: 1, max: 5, required: true },
  description: { type: String },
})


module.exports = mongoose.model('Restaurant', restaurantSchema)

