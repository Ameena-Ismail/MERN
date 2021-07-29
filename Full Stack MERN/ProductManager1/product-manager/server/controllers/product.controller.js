const Product = require("../models/product.model")

module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong adding a product to the database!", err:err}))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Something went wrong when grabbing all products!!", err: err}))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong when grabbing one product!!", err: err}))
}