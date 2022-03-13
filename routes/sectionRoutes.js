const express = require('express');
const router = express.Router();
const { getSections, addSection, getSection, updSection, delSection } = require('../controllers/sectionControllers');

router
  .route('/')
  .get(getSections) // Get All Sections
  .post(addSection) // Add a Section

router
  .route('/:id')
  .get(getSection) // Get Single Section
  .put(updSection) // Update a Section
  .delete(delSection) // Delete a section

module.exports = router;
