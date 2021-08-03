const Author = require('../models/author.model');

// get all Products
module.exports.getAllAuthors = (req, res) => {
    console.log("Inside getAllAuthors");

    Author.find( { } )  // find All Authors documents
        .then((allAuthors) => {
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
// get one Author
module.exports.getOneAuthor = (req, res) => {
    console.log("inside getOneAuthor");
    console.log(req.params.id);

    Author.findById(req.params.id)
    .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// create Author
module.exports.createAuthor = (req, res) => {
    console.log("Inside createAuthor");
    console.log(req.body);

    Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
// update Author
module.exports.updateAuthor = (req, res) => {
	console.log("inside updateAuthor");
	console.log(req.params.id);  // the document we need to update
	console.log(req.body);       // the data we will be updating with

	// update by default will send back the ORIGINAL document....NOT the updated one!
	// Update will NOT validate your data by default
	Author.findByIdAndUpdate(req.params.id, req.body, {
		new: true,    // return the updated document instead of the original
		runValidators: true  // validate the json data just like the create
	})
		.then((updatedAuthor) => {
			console.log(updatedAuthor);
			res.json(updatedAuthor);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
// delete Author
module.exports.deleteAuthor = (req, res) => {
    console.log("inside deleteAuthor");
    console.log(req.params.id);

    Author.findByIdAndDelete(req.params.id)
    .then((deletedAuthor) => {
        console.log(deletedAuthor);
        res.json(deletedAuthor);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};