const mongoose = require('mongoose');

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

const File = mongoose.model("File",fileModel);
module.exports = File;

