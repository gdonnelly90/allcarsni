const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Register user
// @ccess   PUBLIC
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User Route');
});

module.exports = router;
