const JokesController = require('../controllers/jokes.controller');

module.exports = function(app){

    app.post('/api/addNewJoke', JokesController.createJoke);
    app.get('/api/getAllJokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getJoke);
    app.post('/api/remove/:id', JokesController.removeJoke);
    app.post('/api/update/:id', JokesController.updateJoke);
    
}
