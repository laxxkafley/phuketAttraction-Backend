const mysql = require("mysql2");
// const dbConfig = require("../config/db.config");  //           ../ it mean go to the folder



//for PlanetScale
// const connection = mysql.createConnection(dbConfig);





// Database configuration
const db = mysql.createConnection
 ({
  host: 'localhost',
  user: 'root',
    password: '',
  database: 'myattractions', // Specify the database to use
 });

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;