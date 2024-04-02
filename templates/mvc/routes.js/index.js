const express = require('express');
const router = express.Router();

// Import sampleRoute
const sampleRoute = require('./sampleRoute');

// Use sampleRoute
router.use('/sample', sampleRoute);

module.exports = router;
