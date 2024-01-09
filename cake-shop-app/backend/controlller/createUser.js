const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const OTP = require('../models/OTP');
var otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const mailSender = require("../utilis/mailSender");


// send OTP
exports.sendOTP = async (req, res) => {
  try {
    // fetch email from req ki body
    const { email } = req.body;

    // check if user is present
    const checkUserPresent = await User.findOne({ email });
    // console.log('eMAIL rESPONSE: ',checkUserPresent);

    // if user exists then return response
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User Already Exists"
      });
    }

    // if user is not present generate OTP
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    // console.log("OTP Generated Successfully");

    // create a email object
    const otpPayload = { email, otp };

    // create a entry in DB for OTP
    const otpBody = await OTP.create(otpPayload);
    console.log(otpBody);

    // send notification mail
    // try {
    //   await mailSender(email,
    //     "OTP for Email Verification",otp);

    // } catch (error) {
    //   console.log("Error occured while sending OTP mail");
    //   return res.status(400).json({
    //     success: false,
    //     message: error.message,
    //   })
    // }

    // return successful response
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    })
  }
  catch (error) {
    console.log(error);
    console.log("Error occured while generating OTP");
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.createUser = async (req, res) => {
  try {
    // fetch data from req body
    const { firstName, lastName, email, password, confirmpassword, otp} = req.body;

    //    if fields are empty
    if (!firstName || !lastName || !password || !email || !confirmpassword || !otp) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    // if password and confirm password dont match
    if (password != confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords Do Not Match",
      });
    }
    // if user already exists
    var user = await User.findOne({ email });

    if (user) {
      user = user.toObject();
      user.password = undefined;
      user.confirmpassword = undefined;
      console.log(user);
      console.log("duplicate entry detected");
      return res.status(400).json({
        success: false,
        message: "User Already Exists,Please Log In"
      })
    }

    // find most recent OTP stored for the user
    const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    // validate input OTP and DATABASE otp
    if (recentOtp.length == 0) {
        // OTP not found in DB
        return res.status(400).json({
            success: false,
            message: "OTP not Found"
        })
    } else if (otp !== recentOtp[0].otp) {
        // invalid OTP
        return res.status(400).json({
            success: false,
            message: "Invalid OTP",
        })
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (error) {
      return res.status(500).json({
        success: false,
        message: "Cannot Hash Password"
      })
    }
    // saving Data into Database
    const userData = new User({
      firstName, lastName, email, password: hashedPassword
    })
    const response = await userData.save();
    res.status(200).json({
      success: true,
      data: response,
      message: "Data Entered Successfully",
    });
  }
  catch (error) {
    console.log("error occured while creating user", error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
