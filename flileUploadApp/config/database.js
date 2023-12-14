const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=>{
        console.log("Database Connection Successful");
    } )
    .catch( (error) => {
        console.log("DB NOT CONNECTED");
        console.error(error.message);
        process.exitCode(1);
    } )
}

module.exports = dbConnect;

