const express = require('express');
const router = express.Router();
const Meeting = require('./models/meeting');

// Route Handlers

// get all entries from DB
router.get('/meetings', function(req, res) {
  Meeting.find({})
    .then(function(data) {
      res.send(data);
    }).catch(function(err) {
      console.log('error getting data');
    });
  // res.send( 'GET req received' );
});

// add new entry to DB
router.post('/meetings', function(req, res) {
  let meetingName = req.body.name;
  let meetingDuration = req.body.duration;
  let meetingAttendees = req.body.attendees;
  let meetingSalary = req.body.salary;

  Meeting.create(
    { meetingName: meetingName,
      meetingDuration: meetingDuration,
      meetingAttendees: meetingAttendees,
      meetingSalary: meetingSalary
     }, function(err, Meeting) {
      if (err) {
        console.log(err);
      }
      res.send(Meeting);
    })

  // test simlple post for debugging
  //  Meeting.create(req.body, function (err, Meeting) {
  //  if (err) return console.log(err);
  //  return res.send(Meeting);
  // });
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
