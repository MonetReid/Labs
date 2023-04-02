const { response } = require("express");
const express = require("express"); // being pulled from node_modules... 

const app = express();

// Create a port number to run the app on our local machine. 

const PORT = 3000;

// app.use(express.static(`${__dirname}/public`));
// console.log("pathway: ", __dirname); 

app.get("/routes", (req, res) => {
    response.send("Hello routes!")
})

app.get("/practice", (req, res) => {
    response.send("Hello practice!")
})

app.get("/index", (req, res) => {
    response.send("hello index")
})

app.get("/try", (req, res) => {
    response.send("hello try")
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

// To start server, in terminal at the project directory using command "nodemon"