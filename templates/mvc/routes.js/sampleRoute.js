const express = require('express');
const router = express.Router();
const { sampleAction } = require('../controllers/sampleController');

// Define routes
router.get('/', sampleAction);

module.exports = router;
