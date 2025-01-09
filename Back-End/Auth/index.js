const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
require('./configs/database').connect();

const userRouter = require('./routes/user');
app.use('/api/v1', userRouter);

app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`);
})