const mongoose = require('mongoose');

// connect to DB
mongoose.connect('mongodb://meetingcalc:meetingcalcdb@ds149844.mlab.com:49844/meeting_calculator');

var db = mongoose.connection;
db.on('error', (err) => console.error('Error connecting to MongoDB:', err));
db.once('open', () => console.log('DB is connected!'));

module.exports = db
