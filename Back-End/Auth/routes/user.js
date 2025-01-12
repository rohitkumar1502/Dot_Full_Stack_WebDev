const express = require('express');
const router = express.Router();
const {auth, isStudent, isAdmin} = require("../middlewares/authVerify");

const {signin, signup} = require('../controllers/auth');

router.post('/login', signin);
router.post('/signup', signup);
// Testing auth route
router.get('/test', auth, (req,res)=>{
    res.json({
        success: true,
        message: "Welcome to protected route of test"
    })
})

// Protected Route single middlewares
router.get('/student', auth, isStudent, (req, res)=>{
    res.json({
        success: true,
        message: "Welcome to protected route for student"
    })
})

router.get('/admin', auth, isAdmin, (req, res)=>{
    res.json({
        success: true,
        message: "Welcome to protected route for admine"
    })
})

module.exports = router;