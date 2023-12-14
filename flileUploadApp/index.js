const express = require('express');
const app = express();
require("dotenv").config;
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 4000;
const dbConnect = require('./config/database');
const cloudinary = require('./config/clodinaryConfig');
const routes = require('./router/routes');


app.use(express.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use("/api/v1",routes)

dbConnect();
cloudinary.cloudinaryConnect();


app.listen(PORT , ()=> {
    console.log(`Server is started at Port: ${PORT}`);
})


// app.use('/', (req,res)=> {
//     res.send("Backend is running");
// })
