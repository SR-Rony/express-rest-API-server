const express = require('express')
const { getProduct, postProduct, getSingleProduct, deleteProduct, updateProduct } = require('../controllers/product.controller')
let route = express.Router()

// get route
route.get("/",getProduct)
// get single product
route.get("/:id",getSingleProduct)
// post route
route.post("/",postProduct)
// update route
route.put("/:id",updateProduct)
// delete route
route.delete("/:id",deleteProduct)

module.exports = route