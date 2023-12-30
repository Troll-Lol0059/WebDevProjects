const express = require('express');
const mongoose = require('mongoose');
require("dotenv");


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=>{
        console.log("Database Connection Successful");
    } )
    .catch( (error) => {
        console.log("DB NOT CONNECTED");
        console.error(error.message);
        process.exit(1);
    } )
}

module.exports = dbConnect;