const express = require('express');

const app = express();
require('./server/config/mongoose.config'); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/jokes.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})