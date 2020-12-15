const express = require('express')
const router = express.Router()
const Item = require('../models/item-model')

router.get('/items', (req, res) => {
  Post.find({}, 'title description', (err, items) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ items: items })
    }
  }).sort({ _id: -1 })
})

  module.exports = Item