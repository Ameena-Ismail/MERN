const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0.1, "Price can't be 0"] 
    },
    description:{
        type: String,
        required: [true, "Description is  required"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;