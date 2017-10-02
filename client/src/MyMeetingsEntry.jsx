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
      <div>
        <div>{this.props.meeting.meetingName} - {this.props.meeting.meetingDuration} - {this.props.meeting.meetingAttendees} - {this.props.meeting.meetingSalary} - {this.props.meeting.meetingCost}
        </div>
      </div>
    );
  }
}

export default MyMeetingsEntry;
