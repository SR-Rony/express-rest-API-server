const mongoose = require('mongoose');

// product model
const productSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    price:Number,
    description:String,
    createdAd:{
      type:Date,
      default:Date.now,
    }
  })
  const Product = mongoose.model("product",productSchema)

  module.exports = Product