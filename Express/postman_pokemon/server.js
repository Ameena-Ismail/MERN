const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))





app.get("/pokemon/1", (req, res) => {
    res.json({message: "Hey! It's a bulbasaur"});
})

app.get("/pokemon/2", (req, res) => {
    res.json({message: "Hey! It's a ivysaur"});
})

app.get("/pokemon/3", (req, res) => {
    res.json({message: "Hey! It's a venusaur"});
})

app.get("/pokemon/4", (req, res) => {
    res.json({message: "Hey! It's a charmander"});
})

app.get("/pokemon/5", (req, res) => {
    res.json({message: "Hey! It's a charmeleon"});
})




app.listen(port, () => console.log(`running on port ${port}!!!!`));