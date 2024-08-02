const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength:50,
    },
    description:{
        type: String,
        required: true,
        maxLength: 350,

    },
    createdAt:{
        type: Date,
        required: true,
        default: new Date
    },
    updatedAt:{
        type: Date,
        required: true,
        default: new Date
    }
})


module.exports = mongoose.model("blogsCollection", blogsSchema);