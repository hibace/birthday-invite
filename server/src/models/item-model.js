const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String
  }
})
const ItemModel = mongoose.model('items', ItemSchema)
module.exports = ItemModel