const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [ true, "Name is required for Author"],
        minlength: [3, "Name must be atleast 3 characters long"],
    },
},{timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);
