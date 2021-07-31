const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, "Title is required for Products" ],
        minlength: [ 3, "Title must be atleast 3 characters long" ],
    },
    price: {
        type: Number,
        required: [ true, "Price is required for Products" ],
        min: [ , "Price must be atleast 3 characters long" ],
    },
    description: {
        type: String,
        required: [ true, "Description is required for Products" ],
        minlength: [ 3, "Description must be atleast 3 characters long" ],
    },
}, {timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);