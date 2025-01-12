const express = require('express');
const router = express.Router();
const {auth, isStudent, isAdmin} = require("../middlewares/authVerify");
const {signin, signup} = require('../controllers/auth');
const User = require('../models/userSchema');

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

router.get('/getemail', auth, async (req, res) => {
    try{
        const id = req.user.id;
        console.log("ID: ", id);

        const user = await User.findById(id);

        res.status(200).json({
            user: user,
            id: id,
            message:"By id we found user details",
            success:true
        })

    }catch(err){
        res.status(500).json({
            message:"Email Not found",
            success: false
        })
    }

})

module.exports = router;