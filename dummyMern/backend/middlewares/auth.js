const jwt = require('jsonwebtoken');
require("dotenv").config();

// middleware to verify if token is valid or not
exports.auth = (req,res,next) => {
    try{
        // fetch token from req ka body
        const token = req.body.token;
        // if token not present then return
        if(!token){
            // if token not present
            return res.status(401).json({
                success:false,
                message:"Token Misssing",
            });
        }

        try{
            // verify if the token is right , it will return the contents of the token
            const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
            // adding the token contents into request so that we can use it in next phase
            req.user = decode;
        }catch(error){
            // if token not valid
            return res.status.json({
                message:"Token is not  valid"
            })
        }
        // go to next middleware or function
        next();
    }catch(error){
        // if request doesnt have a token
        return res.status(404).json({
            message:"Token does not exists",
        })
    }
}


// middleware to verify roles
exports.isStudent = (req,res,next) => {
    try{
        console.log(req.user.role);
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"Not a student",
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}


exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"Not a Admin",
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}

