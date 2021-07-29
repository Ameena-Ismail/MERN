const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productmanager", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

    .then(() => console.log("found mongoose!"))
    .catch (err => console.log("I lost the mongoose!", err));