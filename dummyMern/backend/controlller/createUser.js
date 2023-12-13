const User = require('../models/userModel');
const bcrypt = require('bcrypt');


exports.createUser = async(req,res) => {
    try{
        // fetch data from req body
       const{name,email,password,confirmpassword,role} = req.body;
       
    //    if fields are empty
       if(!name||!password||!email||!confirmpassword||!role){
            return res.status(400).json({
                success:false,
                message:"Please fill all fields",
            });
       }
    // if password and confirm password dont match
       if(password != confirmpassword){
            return res.status(400).json({
                success:false,
                message:"Passwords Do Not Match",
            });
       }
    // if user already exists
       var user = await User.findOne({email});
   
       if(user){
            user = user.toObject();
            user.password = undefined;
            user.confirmpassword = undefined;
            console.log(user);
            console.log("duplicate entry detected");
            return res.status(400).json({
                success:false,
                message:"User Already Exists"
            })
       }
    // hashing password  
       let hashedPassword;
       let hashedConfirmpassword;

       try{
          hashedPassword = await bcrypt.hash(password,10);
          hashedConfirmpassword = await bcrypt.hash(confirmpassword,10);
       }
       catch(error){
          return res.status(500).json({
            success:false,
            message:"Cannot Hash Password"
          })
       }
    // saving Data into Database
       const userData = new User({
            name,email,password:hashedPassword,confirmpassword:hashedConfirmpassword,role
       })
       const response = await userData.save();
       res.status(200).json({
            success:true,
            data:response,
            message:"Data Entered Successfully",
       });
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
          message: error.message,
        });
    }
}
