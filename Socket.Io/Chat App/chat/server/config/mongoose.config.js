const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/chatapp", { //"mongodb://localhost/hand"
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection'))
    .catch((err) => {
        console.log('Something went wrong connecting to the database'), err
    });