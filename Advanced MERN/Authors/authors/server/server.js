const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());

require('./config/mongoose.config');

require('./routes/author.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
})