const ProductController = require("../controllers/product.controller");


module.exports = app =>{
    //CREATE
    app.post("/api/products/create", ProductController.createProduct);
    //READ ALL
    app.get("/api/products", ProductController.findAllProducts);
    //READ ONE
    app.get("/api/products/:_id", ProductController.findOneProduct)
    //UPDATE
    app.put("/api/products/update/:_id", ProductController.updateProduct);
    //DELETE
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
}