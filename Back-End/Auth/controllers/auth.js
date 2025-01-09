const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/userSchema");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    let hashedPass;
    try {
      hashedPass = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.json({
        message: "Error in hashing password",
        success: false,
      });
    }
    const user = await User.create({
      name,
      email,
      password: hashedPass,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User created succuessfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "User Cannot be register",
      success: false,
    });
  }
};



exports.singin = async (req, res)=> {
   
}
