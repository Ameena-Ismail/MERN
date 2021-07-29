const Product = require("../models/product.model")


//CREATE
module.exports.createProduct = (req, res) =>  {
    Product.create(req.body)
        .then(newProduct => {
            console.log(">>>>>>>>>.", newProduct)
            res.json(newProduct)
        })
        .catch(err => res.json({message: "Create has Failed", err : err}))
}

//READ ALL

module.exports.findAllProducts = (req, res) =>  {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "READ ALL has Failed", err : err}))
}



//READ ONE

module.exports.findOneProduct = (req, res) =>  {
    console.log(req.params._id)
    Product.findOne({_id : req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "READ ONE Product has Failed", err : err}))
}


//UPDATE

module.exports.updateProduct = (req, res) =>{
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "UPDATE has Failed", err : err}))
}
//DELETE

module.exports.deleteProduct = (req, res) =>  {
    Product.remove({_id: req.params._id})
        .then(res.json({message : "Product was successfully removed!"}))
        .catch(err => res.json({message: "DELETE has Failed", err : err}))
}