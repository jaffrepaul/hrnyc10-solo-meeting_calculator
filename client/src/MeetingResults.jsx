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
    // console.log(this.props.meetings);
    // console.log('hello from submit button');
    axios.post('api/meetings', {
    	name: this.props.meetings.meetingName,
    	duration: this.props.meetings.meetingDuration,
    	attendees: this.props.meetings.meetingAttendees,
    	salary: this.props.meetings.meetingSalary,
      cost: this.props.meetings.meetingCost
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
      <div className="card">
        <img className="card-img-top" src="https://media.giphy.com/media/5fBH6z8aMV1RbA4FaSc/giphy.gif" alt="Card image cap" />
          <div className="card-body">
          <h3>{this.props.meetings.meetingName}</h3>
          <p className="card-text">Your meeting is costing you:
          <strong>${this.props.meetings.meetingCost}</strong></p>
            <button onClick={this.handleSubmit} className="btn btn-sm btn-light" type="submit">Save MyMeeting</button>
          </div>
      </div>
    );
  }
}

export default MeetingResults;
