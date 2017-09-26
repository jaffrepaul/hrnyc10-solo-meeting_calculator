const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Meeting = new Schema({
  meetingName: {
    type: String,
    required: true
  }
  meetingDuration: {
    type: Number,
    required: true
  }
  meetingAttendees: {
    type: Number,
    required: true
  }
  meetingSalary: {
    type: Number,
    required: true
  }

});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
