const express = require('express');
const router = express.Router();

// importing controllers
const {localFileUpload} = require('../controllers/fileUpload');
const {imageUpload} = require('../controllers/fileUpload');

// mapping routes to controllers

// uploads a file to local backend storage
router.post('/uploadLocal',localFileUpload);
// upload a image to Cloudinary 
router.post('/imageUpload',imageUpload);


module.exports = router;