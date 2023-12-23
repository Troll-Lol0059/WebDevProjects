const express = require('express');
const router = express.Router();

// importing controllers
const {localFileUpload} = require('../controllers/fileUpload');
const {imageUpload} = require('../controllers/fileUpload');
const {videoUpload} = require('../controllers/fileUpload');
const {uploadReducedImage} = require('../controllers/fileUpload');

// mapping routes to controllers

// uploads a file to local backend storage
router.post('/uploadLocal',localFileUpload);
// upload a image & video to Cloudinary 
router.post('/videoUpload',videoUpload);
router.post('/imageUpload',imageUpload);
router.post('/uploadReduced',uploadReducedImage);


module.exports = router;