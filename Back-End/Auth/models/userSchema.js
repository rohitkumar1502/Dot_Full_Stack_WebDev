const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trin: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trin: true
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'student', 'visitor'],
        default: 'student'
    }
});

module.exports = mongoose.model('User', userSchema);