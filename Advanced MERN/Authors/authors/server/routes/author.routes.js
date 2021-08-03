const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    // get all authors
    app.get("/api/authors", AuthorController.getAllAuthors);
    // get one author
    // create a param variable called "id"
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    // create author
    app.post("/api/authors", AuthorController.createAuthor);
    // update author
    // put and patch are all used for updating
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    // delete author
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}