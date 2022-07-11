const express = require('express');
const router = express.Router();

// @route   GET api/cars
// @desc    Cars route
// @ccess   PUBLIC
router.get('/', (req, res) => res.send('Car Route'));

module.exports = router;
