const mongoose = require('mongoose');

// product model
const productSchema = new mongoose.Schema({
    title:{
      type:String,
      required:[true,"product title is required"],
      trim : true,
    },
    price:{
      type:Number,
      required:true
    },
    rating:{
      type:Number,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    createdAd:{
      type:Date,
      default:Date.now,
    }
  })
  const Product = mongoose.model("product",productSchema)

  module.exports = Product