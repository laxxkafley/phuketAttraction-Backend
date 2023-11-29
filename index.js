


// //////////////////use middleware





// // port=process.env.port||5000 
// // app.listen(port,()=>{
// //     console.log(`listening to the ${port}`)

// // });


// // const express = require('express');
// // const path=require('path');
// // const multer = require('multer');
// // const app = express();
// // const port = process.env.PORT || 3000;


// app.get("/index.html",(req,res)=>{
// //   res.send(" ");
// // });


 


// // // Define storage for uploaded files
// // const storage = multer.memoryStorage(); // Use memory storage for this example
// // const upload = multer({ storage }); // Create a multer instance

// // // Define your POST route for uploading attractions
// // app.post('/api/attractions', upload.single('image'), (req, res) => {
// //   // Handle the uploaded file using req.file
// //   // Extract other attraction data from req.body

// //   // Your code for processing and saving the uploaded file

// //   res.status(201).json({ message: 'New attraction created successfully' });
// // });

// // // Start your Express app
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
// // // Import necessary modules and middleware

// // // Handle POST request to create a new attraction
// // app.post('/api/attractions', upload.single('image'), (req, res) => {
// //   const { name, description } = req.body; // Extract other attraction data

// //   // Validate and handle the image file (req.file) as needed
// //   // Save the image to a specified location

// //   // Create a new attraction object and add it to your data store

// //   res.status(201).json({ message: 'New attraction created successfully' });
// // });


// // const mysql = require('mysql');
// // const dbConfig = require('./db.config');

// // const connection = mysql.createConnection(dbConfig);



// // const express = require('express');
// // const app = express();
// // const port = process.env.PORT || 3000;

// // // Middleware to parse JSON data from the request body
// // app.use(express.json());

// // // Import the attraction routes
// // const attractionRoutes = require('../routes/attraction.route');

// // // Use the attraction routes
// // app.use('/api', attractionRoutes);

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const port = process.env.PORT || 3000;



// // Middleware to parse JSON data from the request body
// app.use(express.json());

// // Import the attraction routes
// const attractionRoutes = require('../routes/attraction.route.js');
// const dbConfig = require('../config/db.config');
// // Create a MySQL connection
// const connection = mysql.createConnection(dbConfig);


// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database as ID ' + connection.threadId);
// });


// // Use the attraction routes
// app.use('/api', attractionRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Pass the database connection to routes
// app.use((req, res, next) => {
//   req.db = connection;
//   next();
// });


/////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const path=require('path');
// const app = express();
// const port = process.env.PORT || 3000;
// const staticPath=(path.join(__dirname, '../public'));
// app.use(express.static(staticPath));
// app.get("/home",(req,res)=>{
//   res.json("Welcome to Phuket attraction and online store ");
// });

// // Sample data for Phuket tourist attractions
// const attractions = [
//   {
//     id: 1,
//     name: 'Phuket Town',
//     description: 'Historical and cultural attractions in Phuket Town.',
//     image: './images/old_town.jpg',
//   },
//   {
//     id: 2,
//     name: 'Bangla Road',
//     description: 'The heart of Phuket nightlife with bars, clubs, and entertainment.',
//     image: './images/bangla.jpg',
//   },
//   {
//     id: 3,
//     name: 'Big Buddha',
//     description: 'A famous landmark featuring a large Buddha statue.',
//     image: './images/big_buddha.jpg',
//   },
//   {
//     id: 4,
//     name: 'Phuket Island',
//     description: 'Explore the beautiful beaches and landscapes of Phuket Island.',
//     image: './images/phuket_island.jpg',
//   },
// ];

// // Route to get a list of tourist attractions
// app.get('/attractions', (req, res) => {
//   res.json(attractions);
// });

// app.post('/attractions', (req, res) => {
//   const { name, description, image } = req.body;

//   // Add validation here to ensure required data is provided
//   if (!name || !description || !image) {
//     return res.status(400).json({ message: 'Name, description, and image are required.' });
//   }

//   // Create a new attraction object
//   const newAttraction = {
//     id: attractions.length + 1,
//     name,
//     description,
//     image,
//   };

//   // Add the new attraction to the attractions array
//   attractions.push(newAttraction);

//   res.status(201).json(newAttraction);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });














const express = require('express');
const path=require('path');
const cors = require('cors')
const app = express();

const port = 3000 || process.env.PORT;

const staticPath=(path.join(__dirname, '../public'));
// app.use(express.static(staticPath));

app.use(cors({
  origin: '*',
}));
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  // res.header('Access-Control-Allow-Methods', 'GET, POST');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/welcome",(req,res)=>{
  res.json(" wELCOME TO PHUKET ATTRACTIONS AND ONLINE STORE");
});
// Middleware to parse JSON data from the request body
app.use(express.json());

const attractionRoutes = require('./after/routes/attraction.route'); // Update the path
require('./after/routes/attraction.route')


// Use the routes
app.use('/api', attractionRoutes); // Use '/api' prefix for all attraction routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});