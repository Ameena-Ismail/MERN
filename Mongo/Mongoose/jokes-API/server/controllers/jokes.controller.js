const { Joke } = require('../models/jokes.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

    // The method below is new
module.exports.createJoke = (request, response) => {
    const { setup, punchline } = request.body;
    Joke.create({
        setup,
        punchline
    })
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}

module.exports.getAllJokes = (request, response) => {
    Joke.find({})
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err))
}

module.exports.getJoke = (request, response) => {
    Joke.findOne({_id:request.params.id})
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err))
}

module.exports.removeJoke = (request, response) => {
Joke.remove({_id:request.params.id})
    .then(jokeremove => {
        // logic (if any) with successfully removed deletedUser object
    })
    .catch(err => res.json(err));
}

module.exports.updateJoke = (request, response) => {
Joke.updateOne({_id:request.params.id}, {
    _id:request.params.id,
    $push: {pets: {name: 'Sprinkles', type: 'Chubby Unicorn' }}
})
    .then(result => {
        // logic with result -- note this will be the original object by default!
    })
    .catch(err => res.json(err));
}