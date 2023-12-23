const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require("dotenv").config;


const fileModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,    
    }
})

// post middleware -> will be fired after saving into DB
// post middlewares are always defined before model export
fileModel.post("save",async function(doc){
    try{
        // create a transporter object
        let transporter = nodemailer.createTransport({
            host:process.env.EMAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });

        // defining mail configs
        const mailOptions = {
            from:'LoveBabbar@codehelp.in',
            to:`${doc.email}`,
            subject:"Important Information regarding Job",
            html:`<h1>Hello Bro</h1> <p> I sent this mail from Code</p> <p>The image is uploaded. </p> <p> <a href="${doc.imageUrl}"> See Image </a> </p>`,
        }

        // function for sending mail
        transporter.sendMail(mailOptions, (error,info) => {
            if(error){
                console.log(error);
            }
            else{
                console.log('Email Sent: ' + info.response);
            }
        } );

    }catch(error){
        console.log("cannot send mail");
        return resizeBy.status(500).json({
            success:false,
            message:"Cannot send mail"
        })
    }
})

const File = mongoose.model("File",fileModel);
module.exports = File;

