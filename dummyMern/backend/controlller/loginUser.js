const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var cookie = require('cookie');
require("dotenv").config;

exports.loginUser = async(req,res) => {
    try{
        const{email,password} = req.body;

        if(!email || !password){
            return res.status(406).json({
                success:false,
                message:"Please fill all details"
            })
        }

        // hashing password  
       let hashedPassword;

        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"Cannot Hash Password"
            })
        }

        let existingUser = await User.findOne( {email} );

        if(!existingUser){
            return res.status(500).json({
                success:false,
                message:"User Does not Exists"
            })
        }

        if( await bcrypt.compare(password,existingUser.password) ){
            // if password matches
            // create jwt token
            const payload = {
                email:existingUser.email,
                id:existingUser._id,
                role:existingUser.role,
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
                expiresIn:"2h",
            })

            existingUser = existingUser.toObject();
            existingUser.password = undefined;
            existingUser.confirmpassword = undefined;
            existingUser.token = token;
            console.log(existingUser);

            const options = {
                expires: new Date( Date.now() + 3*24*60*60*1000 ),
                httpOnly:true,
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                existingUser,
                message:"Logged In Successfully",
            });
            console.log("Login Done");

        }
        else{
            // password dont matches
            return res.status(403).json({
                success:false,
                message:"Password Dont Match"
            })
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}


