const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  meetingName: {
    type: String,
    required: true
  },
  meetingDuration: {
    type: String,
    required: true
  },
  meetingAttendees: {
    type: Number,
    required: true
  },
  meetingSalary: {
    type: String,
    required: true
  }
});

const Meeting = mongoose.model('Meeting', MeetingSchema);

module.exports = Meeting;
