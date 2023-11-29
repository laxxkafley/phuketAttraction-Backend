const db = require('./db');

// function getAllAttractions(callback) {
//   const query = 'SELECT * FROM attractions';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error retrieving attractions: ' + err);
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }

// function addAttraction(newAttraction, callback) {
//   const query = 'INSERT INTO attractions (name, description, image_url,) VALUES (?, ?, ?,';
//   const { name, description, image_url } = newAttraction;

//   db.query(query, [name, description, image_url,], (err, result) => {
//     if (err) {
//       console.error('Error adding attraction: ' + err);
//       callback(err, null);
//     } else {
//       const addedAttraction = { id: result.insertId, name, description, image_url ,url,location,things_to_do,detailed_description};
//       callback(null, addedAttraction);
//     }
//   });
// }


function getAttractionById(at_id, callback) {
  const query = 'SELECT name, image_url, description, detailed_description, location,things_to_do FROM attractions WHERE at_id = ?';
  db.query(query, [at_id], (err, results) => {
    if (err) {
      console.error('Error retrieving attraction by ID: ' + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback(new Error('Attraction not found'), null);
    } else {
      callback(null, results[0]);
    }
  });
}


function getAttractions(result) {
  // Construct your query to select all attractions with additional fields.
  const query = 'SELECT name, description, image_url, url FROM attractions';
  
  db.query(query, (err, attractions) => { 
    if (err) {
      console.error('Error retrieving attractions: ' + err);

      return result(err,null)
    }
    else return result(null,attractions);
  });
}
// function getAttractions(callback) {
//   const query = 'SELECT * FROM attractions';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error retrieving attractions: ' + err);
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }
// function getAttractions(req, res) {
//   // Construct your query to select all attractions with additional fields.
//   const query = 'SELECT id, name, description, image_url, detailed_description, location, things_to_do FROM attractions';
  
//   db.query(query, (err, attractions) => {
//     if (err) {
//       console.error('Error retrieving attractions: ' + err);
//       return res.status(500).json({ message: 'Error retrieving attractions' });
//     }
//     res.json(attractions);
//   });
// }


function addAttraction(newAttraction, callback) {
  const query = 'INSERT INTO attractions (name, description, image_url, location, things_to_do, detailed_description) VALUES (?, ?, ?, ?, ?, ?)';
  const { name, description, image_url, location, things_to_do, detailed_description } = newAttraction;

  db.query(query, [name, description, image_url, location, things_to_do, detailed_description], (err, result) => {
    if (err) {
      console.error('Error adding attraction: ' + err);
      callback(err, null);
    } else {
      const addedAttraction = { at_id: result.insertId, name, description, image_url, location, things_to_do, detailed_description };
      callback(null, addedAttraction);
    }
  });
}

function updateAttraction(at_id, updatedAttraction, callback) {
  const { name, description, image_url, location, things_to_do, detailed_description } = updatedAttraction;
  const query = 'UPDATE attractions SET name = ?, description = ?, image_url = ?, location = ?, things_to_do = ?, detailed_description = ? WHERE at_id = ?';

  db.query(query, [name, description, image_url, location, things_to_do, detailed_description, at_id], (err, result) => {
    if (err) {
      console.error('Error updating attraction: ' + err);
      callback(err, null);
    } else if (result.affectedRows === 0) {
      callback(new Error('Attraction not found'), null);
    } else {
      callback(null, { at_id, name, description, image_url, location, things_to_do, detailed_description });
    }
  });
}

function deleteAttraction(at_id, callback) {
  const query = 'DELETE FROM attractions WHERE at_id = ?';

  db.query(query, [at_id], (err, result) => {
    if (err) {
      console.error('Error deleting attraction: ' + err);
      callback(err, null);
    } else if (result.affectedRows === 0) {
      callback(new Error('Attraction not found'), null);
    } else {
      callback(null, { at_id });
    }
  });
}


module.exports = {
  getAttractions,
  addAttraction,
  updateAttraction,
  deleteAttraction,
  getAttractionById
};