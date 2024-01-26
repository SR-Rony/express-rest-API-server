const express = require('express')
const { getProduct, postProduct, getSingleProduct } = require('../controllers/product.controller')
let route = express.Router()

// get route
route.get("/",getProduct)
// get single product
route.get("/:id",getSingleProduct)
// post route
route.post("/",postProduct)

module.exports = route