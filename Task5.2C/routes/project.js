const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET all projects
router.get('/', projectController.getAllProjects);

// POST insert sample projects
router.post('/insert-sample', projectController.insertSampleProjects);

// insert seed data
// router.get('/insert-sample', projectController.insertSampleProjects);

module.exports = router;
