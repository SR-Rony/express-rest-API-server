const express = require('express')
const { getProduct, postProduct } = require('../controllers/product.controller')
let route = express.Router()

// get route
route.get("/",getProduct)
// post route
route.post("/",postProduct)

module.exports = route