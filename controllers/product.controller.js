const Product = require("../models/product.model")

// get product
const getProduct = async (req,res)=>{
  try{
   let price = req.body.price;
   let rating =  req.body.rating;

   let allProduct;
    if(price || rating){
      allProduct = await Product.find({$or:[{price : {$gt:5000}},{rating : {$gt:4.4}}]})
      .sort({price:1})
    }else{
     allProduct = await Product.find().sort({price:1})
    }
    if(allProduct){
      res.status(200).send({
        success:true,
        message:"return all product",
        data:allProduct
      })
    }else{
      res.status(400).send({
        success:false,
        message:"404 pages is not found",
        
      })
    }
    }catch(error){
      res.status(500).send(`server error ${error}`)
    }
}

// get single product 

const getSingleProduct = async (req,res)=>{
  try{
    const id = req.params.id
    const singleProduct = await Product.findOne({_id:id},{title:1,_id:0})
    if(singleProduct){
      res.status(200).send({
        success:true,
        message: "return  product details",
        data:singleProduct
      })
    }else{
      res.status(400).send({
        success:false,
        message:"404 pages is not found"
      })
    }
    }catch(error){
      res.status(500).send(`server error ${error}`)
    }
}


// post product
const postProduct = async(req,res)=>{
    try{
      const newProduct = new Product({
        title:req.body.title,
        price:req.body.price,
        rating:req.body.rating,
        description:req.body.description,
      })
     const  newProductdata = await newProduct.save()
      res.status(201).send(newProductdata)
    }catch(error){
      res.status(500).send(`server error ${error}`)
    }
  }

// update product

const updateProduct = async (req,res)=>{
  try{
    const id = req.params.id;
    // const title = req.body.title
    // const price = req.body.price
    // const description = req.body.description
   let productUpdate = await Product.findByIdAndUpdate(
    {_id:id},
    {$set : {
      title:req.body.title,
      price:req.body.price,
      rating:req.body.rating,
      description:req.body.description
    }},
    {new:true})
   if(productUpdate){
    res.status(200).send({
      success:true,
      message: "product is update",
      data:productUpdate
    })
   }else{
    res.status(404).send({
      success:false,
      message:"product is not update",
    })
   }
  }catch(error){
    res.status(500).send(`server error ${error}`)
  }
}

// delete product
  const deleteProduct = async (req,res) =>{
    try{
     let id = req.params.id
    let productDelete = await  Product.findByIdAndDelete({_id:id})
      if(productDelete){
        res.status(200).send({
          success:true,
          message:"product is delete",
          data:productDelete
        })
      }else{
        res.status(404).send({
          success:false,
          message:'product is not delete',
        })
      }

    }catch(error){
      res.status(500).send(`pages is not found ${error}`)
    }
  }

module.exports ={getProduct,postProduct,getSingleProduct,deleteProduct,updateProduct}