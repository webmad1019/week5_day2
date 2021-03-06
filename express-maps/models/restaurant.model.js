const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Restaurant', restaurantSchema);