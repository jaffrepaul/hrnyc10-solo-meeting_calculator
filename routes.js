const express = require('express');
const router = express.Router();

// ========== Route Handlers

// get all entries from DB
router.get('/meetings', function(req, res) {
  res.send( 'GET req received' );
});

// add new entry to DB
router.post('/meetings', function(req, res) {
  res.send( 'POST req received' );
});

// update entry in DB
router.put('/meetings/:id', function(req, res) {
  res.send( 'PUT req received' );
});

// delete entry in DB
router.delete('/meetings', function(req, res) {
  res.send( 'DELETE req received' );
});

// export this router obj to be used elsewhere
module.exports = router;
