const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    // get all products
    app.get("/api/products", ProductController.getAllProducts);
    // get one product
    // create a param variable called "id"
    app.get("/api/products/:id", ProductController.getOneProduct);
    // create product
    app.post("/api/products", ProductController.createProduct);
    // update product
    // put and patch are all used for updating
    app.put("/api/products/:id", ProductController.updateProduct);
    // delete product
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}