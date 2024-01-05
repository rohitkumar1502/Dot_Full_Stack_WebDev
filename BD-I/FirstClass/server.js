
// Server instantiate
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.listen(3000, () => {
    // stablis port number
    console.log("Server is started at 3000 port number");
});
//Routes
app.get('/', (req,res)=>{
    res.send("Hello I'm Rohit Kumar");
    //send response
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Cars summited succesfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDbConnect')
.then(() => { console.log("Connection successful"); })
.catch((error) => console.log("Error: ", error));
