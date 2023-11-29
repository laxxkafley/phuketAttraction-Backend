// const uploadFile = require("../middleware/upload");
// const upload = async (req, res) => {
//     try {
//         await uploadFile(req, res);
//         if(req.file == undefined){
//             return res.status(400).send({
//                 message: "Not found the upload file." 
//         });
//         }
//         res.status(200).send({
//             message: "Upload file successfullly: " + req.file.filename,
//             uploadFileName : req.file.filename
//         });
//     } catch (error) {
//         res.status(500).send({
//             message: "Could not upload the file:" + error
//         });
//     }
// };

// const download = (req, res) => {
//     const filename = req.params.name;
//     const directoryPath = __basedir + "/assets";
//     res.download(directoryPath + filename, filename,(err) => {
//         if(err){
//             res.status(500).send({ message: "Could not display the file." + err});  // check err

//         }
//     });
// }
// // const newc = (req,res)=>{res.send({m:"hhh"})}

// module.exports = { upload, download };

// file.controller.js











// const multer = require('multer');
// const path = require('path');
// const express = require('express');
// const router = express.Router();

// // Set up storage for uploaded files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a unique name
//   },
// });

// // Create a multer instance with the storage configuration
// const upload = multer({ storage: storage });

// // Define a route for uploading a file (e.g., an attraction image)
// router.post('/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }
  
//   // Handle the uploaded file here
//   // You can save the file path to your attraction data, database, etc.

//   const filePath = req.file.path; // This will be the path to the uploaded image file

//   return res.status(200).json({ message: 'File uploaded successfully', filePath });
// });

// module.exports = router;








// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Define the destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname); // Define the filename for the uploaded file
//   },
// });

// const upload = multer({ storage: storage });

// function uploadFile(req, res) {
//   // Handle file upload using `upload` middleware
//   // Process the uploaded file and save its details as needed
//   // Return a response to the client
// }

// module.exports = {
//   uploadFile,
// };