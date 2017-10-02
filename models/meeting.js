const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  meetingName: {
    type: String
  },
  meetingDuration: {
    type: String
  },
  meetingAttendees: {
    type: Number
  },
  meetingSalary: {
    type: String
  },
  meetingCost: {
    type: String
  }
});

const Meeting = mongoose.model('Meeting', MeetingSchema);

module.exports = Meeting;
