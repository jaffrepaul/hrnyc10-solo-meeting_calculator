import React from 'react';
import ReactDOM from 'react-dom';

class MeetingResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        { this.state.meetingTotal ? <div><p>My Meeting Cost:</p><h3>{this.state.meetingName}</h3><span>${this.state.meetingTotal}</span><br /><button className="btn btn-sm btn-default" type="submit">Save MyMeeting</button></div> : <div></div> }
      </div>
    );
  }
}

export default MeetingResults;
