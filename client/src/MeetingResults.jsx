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
        <div><p>My Meeting Cost:</p><h3>{this.props.data.meetingName}</h3>
        <span>${this.props.data.meetingTotal}</span><br />
        <button className="btn btn-sm btn-default" type="submit">Save MyMeeting</button></div>
      </div>
    );
  }
}

export default MeetingResults;
