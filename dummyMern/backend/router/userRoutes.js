const express = require('express');
const router = express.Router();

// import controlllers
const {createUser} = require('../controlller/createUser');
const {loginUser} = require('../controlller/loginUser');

// map routes
router.post("/createUser",createUser);
router.post("/login",loginUser);


module.exports = router;