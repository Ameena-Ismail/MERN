const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Title is required"]
    },

    price : {
        type : Number,
        required : [true, "Price is Required"],
        min: [1, "Price must be at least 1 dollar!"]
    },

    description :{
        type : String,
        required : [true, "Description is required"],
    }

},{timeStamps : true})


const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;