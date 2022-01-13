require("dotenv").config();
require("./database").connect();
const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const useragent = require('express-useragent');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

// importing user context
const User = require("./user");

// Register
app.post("/register", async (req, res) => {
    // Our register logic starts here
    
  try {
    // Get user input
    const { fullname, email, password } = req.body;

    // Validate user input
    if (!(email && password && fullname)) {
      res.status(400).send("All input is required");
    }

    // Check if user registered before
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      fullname,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const useragent = req.headers['user-agent'];
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email ,useragent},
      process.env.TOKEN_KEY,
      {
        expiresIn: "3h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;