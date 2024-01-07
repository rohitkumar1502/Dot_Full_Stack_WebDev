const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse the json requist body
app.use(express.json());

// import routes from todo api
const todoRoutes = require("./routes/todos");
//mount the todo ASPI routes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, ()=>{
    console.log(`Server started succesfully at ${PORT}`);
})

// conect to the database
const dbConnection = require("./config/database");
dbConnection();

// default route

app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page babby</h1>`);
})

