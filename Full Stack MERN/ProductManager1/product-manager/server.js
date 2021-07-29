const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/product.routes")(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));