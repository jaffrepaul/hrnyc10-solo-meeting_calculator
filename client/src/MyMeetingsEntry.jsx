import React from 'react';
import ReactDOM from 'react-dom';

class MyMeetingsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props);
    return (
      // <li>
      //   {this.props.meeting.meetingName} - {this.props.meeting.meetingDuration} - {this.props.meeting.meetingAttendees} - {this.props.meeting.meetingSalary}
      // </li>

      <div className="row">
        <div className="col-md-4">{this.props.meeting.meetingName} - {this.props.meeting.meetingDuration} - {this.props.meeting.meetingAttendees} - {this.props.meeting.meetingSalary}</div>
      </div>
    );
  }
}

export default MyMeetingsEntry;
