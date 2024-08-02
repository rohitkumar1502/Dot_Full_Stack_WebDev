const express = require('express');
const DBConnect = require('./configs/database');
const router = require('./routers/blogsRoute');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/api/v1", router)
//DB conection
DBConnect();
// Server Conection
app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`----------${process.env.SERVER_PORT}---------`)
});