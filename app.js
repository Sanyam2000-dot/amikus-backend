const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var process = require("process");

const app = express();
// var corsOptions = {
//     origin: "https://amikus.netlify.app",
//     optionsSuccessStatus: 200,
//     // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.use(
    cors({
        origin: "*",
    })
);

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://amikus.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
};

app.use(allowCrossDomain);
const server_port = process.env.YOUR_PORT || process.env.PORT || 3000;

const server_host = process.env.YOUR_HOST || "0.0.0.0";

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

app.listen(server_port, server_host, () => {
    console.log("Listening on port %d", server_port);
});

//   Start server.
console.log(`Server is listening on port ${server_port}`);