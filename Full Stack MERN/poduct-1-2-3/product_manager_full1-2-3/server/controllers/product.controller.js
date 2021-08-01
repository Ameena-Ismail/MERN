const Product = require('../models/product.model');

// get all Products
module.exports.getAllProducts = (req, res) => {
    console.log("Inside getAllProducts");

    Product.find( { } )  // find all movie documents
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
// get one Product
module.exports.getOneProduct = (req, res) => {
    console.log("inside getOneProduct");
    console.log(req.params.id);

    Product.findById(req.params.id)
    .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// create Product
module.exports.createProduct = (req, res) => {
    console.log("Inside createProduct");
    console.log(req.body);

    Product.create(req.body)
        .then((newProduct) => {
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
// update Product
module.exports.updateProduct = (req, res) => {
	console.log("inside updateProduct");
	console.log(req.params.id);  // the document we need to update
	console.log(req.body);       // the data we will be updating with

	// update by default will send back the ORIGINAL document....NOT the updated one!
	// Update will NOT validate your data by default
	Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,    // return the updated document instead of the original
		runValidators: true  // validate the json data just like the create
	})
		.then((updatedProduct) => {
			console.log(updatedProduct);
			res.json(updatedProduct);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
// delete Product
module.exports.deleteProduct = (req, res) => {
    console.log("inside deleteProduct");
    console.log(req.params.id);

    Product.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
        console.log(deletedProduct);
        res.json(deletedProduct);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};