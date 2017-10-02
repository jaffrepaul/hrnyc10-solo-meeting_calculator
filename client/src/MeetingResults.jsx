import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MeetingResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('hello from submit button');
    axios.post('/api/meetings', {
    	meetingName: this.props.meetingName,
    	meetingDuration: this.props.meetingDuration,
    	meetingAttendees: this.props.meetingAttendees,
    	attendeeSalary: this.props.attendeeSalary,
      meetingCost: this.props.meetingCost
    })
    .then((response) => {
    	console.log(response);
    })
    .catch((error) => {
    	console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div><h3>{this.props.meetings.meetingName}</h3>
        Your meeting is costing you: <strong>${this.props.meetings.meetingTotal}</strong><br />
        <br />
        <button onClick={this.handleSubmit} className="btn btn-sm btn-default" type="submit">Save MyMeeting</button></div>
        <br />
        <br />
      </div>
    );
  }
}

export default MeetingResults;

// <p>My Meeting Cost:</p>
