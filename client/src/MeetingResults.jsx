import React from 'react';
import ReactDOM from 'react-dom';

class MeetingResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div><h3>{this.props.meetings.meetingName}</h3>
        {this.props.meetings.meetingDuration}<br />
        {this.props.meetings.meetingAttendees} people<br />
        {this.props.meetings.attendeeSalary} average salary<br />
        Your meeting is costing you: <strong>${this.props.meetings.meetingTotal}</strong><br />
        <br />
        <button onClick={this.props.handleSubmit} className="btn btn-sm btn-default" type="submit">Save MyMeeting</button></div>
        <br />
        <br />
      </div>
    );
  }
}

export default MeetingResults;

// <p>My Meeting Cost:</p>
