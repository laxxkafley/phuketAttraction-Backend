const Attraction = require('../models/attraction.model');
const db = require('../models/db'); // Import the db connection

function createAttraction(req, res) {
  const { name, description, image_url } = req.body;

  if (!name || !description || !image_url) {
    return res.status(400).json({ message: 'Name, description, and image_url are required.' });
  }

  // Insert the new attraction into the database
  const query = 'INSERT INTO attractions (name, description, image_url) VALUES (?, ?, ?)';
  const values = [name, description, image_url];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error creating a new attraction: ' + err);
      res.status(500).json({ message: 'Error creating a new attraction' });
    } else {
      // Return the newly created attraction with its ID
      const newAttraction = {
        id: results.insertId,
        name,
        description,
        image_url,
      };
      res.status(201).json(newAttraction);
    }
  });
}



const getAttractions = async (req, res) => {
 await Attraction.getAttractions((err, attractions) => {
    if (err) {
      console.error('Error retrieving attractions: ' + err);
      return res.status(500).json({ message: 'Error retrieving attractions' });
    }
    res.json(attractions);
  });
}

const getSingleAttraction= async (req,res) =>{
  await Attraction.getAttractionById(req.params.at_id,(err,attractions)=>{
    if (err) {
      console.error('Error retrieving attractions: ' + err);
      return res.status(500).json({ message: 'Error retrieving attractions' });
    }
    res.json(attractions);
  })
 
}


// ... other controllers ...

// Create a new attraction
function createAttraction(req, res) {
  const { name, description, image_url, location, things_to_do, detailed_description } = req.body;

  if (!name || !description || !image_url || !location || !things_to_do || !detailed_description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Insert the new attraction into the database
  Attraction.addAttraction({ name, description, image_url, location, things_to_do, detailed_description }, (err, newAttraction) => {
    if (err) {
      console.error('Error creating a new attraction: ' + err);
      res.status(500).json({ message: 'Error creating a new attraction' });
    } else {
      res.status(201).json(newAttraction);
    }
  });
}

// Update an existing attraction
function updateAttraction(req, res) {
  const at_id = req.params.at_id;
  const { name, description, image_url, location, things_to_do, detailed_description } = req.body;

  if (!name || !description || !image_url || !location || !things_to_do || !detailed_description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  Attraction.updateAttraction(
    at_id,
    { name, description, image_url, location, things_to_do, detailed_description },
    (err, updatedAttraction) => {
      if (err) {
        console.error('Error updating attraction: ' + err);
        res.status(500).json({ message: 'Error updating attraction' });
      } else {
        res.json(updatedAttraction);
      }
    }
  );
}

// Delete an existing attraction
function deleteAttraction(req, res) {
  const at_id = req.params.at_id;

  Attraction.deleteAttraction(at_id, (err, deletedAttraction) => {
    if (err) {
      console.error('Error deleting attraction: ' + err);
      res.status(500).json({ message: 'Error deleting attraction' });
    } else {
      res.json(deletedAttraction);
    }
  });
}


module.exports = {

  getAttractions,
  getSingleAttraction,
  createAttraction,
  updateAttraction,
  deleteAttraction,
};


// function deleteAttraction(req, res) {
//   const attractionId = req.params.id;

//   // You'll need to delete the attraction with the provided ID from the database
//   // Use the attractionId to query the database and delete the attraction
//   // Example query: DELETE FROM attractions WHERE id = attractionId

//   // For now, let's simulate a successful deletion until you implement database functionality
//   const successMessage = `Attraction with ID ${attractionId} has been successfully deleted.`;
//   res.json({ message: successMessage });
// }

// module.exports = {
//   deleteAttraction,
// };