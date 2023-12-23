const File = require('../models/model');
const cloudinary = require('cloudinary').v2;

// uploads file to local storage
exports.localFileUpload = ( async(req,res) => {
    try{
        // fetching file to be uploaded from req.body
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/file/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log(path);

        await file.mv(path, (error) => {
            if(error){
                return res.status(500).send(error);
            }
            res.send('File Uploaded SuccessFully');
        } );

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Cannot Upload File"
        })
    }
} )

// function to upload to cloudinary
async function uploadFileToCloudinary(file,folder,imageQuality){
    const options = {folder};
    options.resource_type = "auto";

    if(imageQuality){
        options.quality = imageQuality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

// function to check if format is supported
function isFileTypeSupported(type,supportedType){
        return supportedType.includes(type);
}

// upload image to cloudinary
exports.imageUpload = ( async(req,res) =>{
    try{
        // data fetch
        const {name,email,tag} = req.body;
        // fetch file
        const file = req.files.image;

        // validation
        const supportedType = ["jpg","jpeg","png"];
        // format nikalo file name se
        const fileType = file.name.split('.')[1];
        console.log(fileType);

        // kya format supported hai
        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }
 
        const response = await uploadFileToCloudinary(file,"Codehelp");
        console.log(response);
        // db me entry daal do
        const fileData = await File.create({
            name,
            tag,
            email,
            // secure url is url of uploaded image , saving it in db for future use
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            message:"Image uploaded successfiully"
        })
    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something Went Wrong",
        })
    }
})


// upload video to cloudinary
exports.videoUpload = ( async(req,res) =>{
    try{
        // data fetch
        const {name,email,tag} = req.body;
        // fetch file
        const file = req.files.video;

        // validation
        const supportedType = ["mp4","mov"];
        // format nikalo file name se
        const fileType = file.name.split('.')[1];
        console.log(fileType);

        // kya format supported hai
        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }
 
        const response = await uploadFileToCloudinary(file,"Codehelp");
        console.log(response);
        // db me entry daal do
        const fileData = await File.create({
            name,
            tag,
            email,
            // secure url is url of uploaded image , saving it in db for future use
            imageUrl:response.secure_url,
        })
 
        res.json({
            success:true,
            message:"Image uploaded successfully"
        })
    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something Went Wrong",
        })
    }
})


// upload reduced image to cloudinary
exports.uploadReducedImage = ( async(req,res) =>{
    try{
        // data fetch
        const {name,email,tag} = req.body;
        // fetch file
        const file = req.files.image;

        // validation
        const supportedType = ["jpg","jpeg","png"];
        // format nikalo file name se
        const fileType = file.name.split('.')[1];
        console.log(fileType);

        // kya format supported hai
        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }
        
        // passing 30 as quality parameter this is reducing quality - 100means 100% quality
        const response = await uploadFileToCloudinary(file,"Codehelp",30);
        console.log(response);
        // db me entry daal do
        const fileData = await File.create({
            name,
            tag,
            email,
            // secure url is url of uploaded image , saving it in db for future use
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            message:"Image uploaded successfiully"
        })
    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something Went Wrong",
        })
    }
})

