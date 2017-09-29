import React from 'react';
import ReactDOM from 'react-dom';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import Navbar from './Navbar.jsx';
const axios = require('axios');


class MyMeetings extends React.Component {

  render() {
    // console.log(this.props); //array of state data
    let meetingItems;

    if (this.props.meetings) {
      meetingItems = this.props.meetings.map(meeting => {
        // console.log(meeting); // individual meeting item
        return (
          <MyMeetingsEntry key={meeting.meetingName} meeting={meeting} />
        );
      });
    }

    return (
    <div>
    <br />
      <strong>MY MEETINGS!</strong>
      {meetingItems}
    </div>
    );
  }
}

export default MyMeetings;
