const Product = require("../models/product.model")

// get product
const getProduct = (req,res)=>{
    res.status(200).send("<h1>i am product pages</h1>")
}
// post product
const postProduct = async(req,res)=>{
    try{
      const newProduct = new Product({
        title:req.body.title,
        price:req.body.price,
        description:req.description,
      })
      newProduct = await newProduct.save()
      res.status(201).send(newProduct)
    }catch(error){
      res.status(500).send(error)
    }
  }

module.exports ={getProduct,postProduct}