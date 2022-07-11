const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Users route
// @ccess   PUBLIC
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;
