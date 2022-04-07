const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

const DB =
    "mongodb+srv://sanyam:sanyam@cluster0.pvopp.mongodb.net/new?retryWrites=true&w=majority";
mongoose
    .connect(DB)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => console.log(err));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express.json());
app.use(require("./router/auth"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});