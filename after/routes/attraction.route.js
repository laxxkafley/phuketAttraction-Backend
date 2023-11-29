

const express = require('express');
// const cors = require('cors'); 
const router = express.Router();
const AttractionController = require('../controllers/attraction.controller');

// Define your routes
router.get('/attractions', AttractionController.getAttractions);
// router.post('/attractions', AttractionController.addAttraction);
// Define the route for retrieving a single attraction
router.get('/attractions/:at_id', AttractionController.getSingleAttraction);
router.post('/attractions', AttractionController.createAttraction);

// Update an existing attraction
router.put('/attractions/:at_id', AttractionController.updateAttraction);

// Delete an attraction
router.delete('/attractions/:at_id', AttractionController.deleteAttraction);


module.exports = router;