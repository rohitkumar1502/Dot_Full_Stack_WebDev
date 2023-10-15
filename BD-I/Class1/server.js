//server instiate
const express = require('express');
const app = express();
//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(8000, () =>{
    console.log("Server started at port no 8000")
});

app.get('/', (request, response) => {
    response.send("Hello ji you are aerver");
});

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Studentlogin',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("Conection Successfull")})
.catch((error) =>{console.log("error recived")})