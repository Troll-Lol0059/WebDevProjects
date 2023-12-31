const express = require('express');
const router = express.Router();

// import controlllers
const {createUser,sendOTP} = require('../controlller/createUser');
const {loginUser} = require('../controlller/loginUser');
const { isStudent } = require('../middlewares/auth');
const { isAdmin } = require('../middlewares/auth');
const {auth} = require('../middlewares/auth');

// map routes
router.post("/createUser",createUser);
router.post("/sendOTP",sendOTP);
router.post("/login",loginUser);

// protected routes
router.get("/student",auth,isStudent, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to Student Portal"
    })
} );


router.get("/admin",auth,isAdmin, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to Admin Portal"
    })
} );


module.exports = router;