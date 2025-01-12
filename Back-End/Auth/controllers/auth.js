const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

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

    return res.status(201).json({
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

exports.signin = async (req, res) => {
  try {
    // Data fetch
    const { email, password } = req.body;
    // Validation of email and password
    if (!email || !password) {
      res.status(400).json({
        message: "Plase fill all the details carefully",
        success: false,
      });
    }

    //check for user is register or not
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User is not register",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    // verify password and generate JWT token

    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 *1000),
        httpOnly: true
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User signin successfully"
      })
    }

    // Password not match
    else{
      return res.status(403).json({
        success: false,
        message: "Password Incorrect"
      })
    }
  } catch (err) {
    console.log("Error in signin", err);
    return res.status(500).json({
      message: "User not able to signin",
      success: false,
    });
  }
};
