// * Start Script
console.log(`LOAD "app.js"`);

// * Setting up Express
// --I'm pretty sure Express is for routings and handling requests
const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));

// * Setting up Body Parser
// --This, as I understand, is necessary when parsing JSON from API's and POST request values
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

// * Setting up EJS
// --EJS is for rendering dynamic pages that get values directly from the server side
app.set(`view engine`, `ejs`);

// * Now here are the routes
// --Home Route
app.get("/", function (req, res) {
    console.log(`GET request for "/"`);

    res.render(`index`, {});
});

// * Server listener
// TODO - Make sure to fix the port number
// 5000 - Personal
// 1000 - freeCodeCamp
// 2000 - Frontend Mentor
// 3000 - London App Brewery
app.listen(1000, function () {
    console.log("The server is running on port 1000.")
});