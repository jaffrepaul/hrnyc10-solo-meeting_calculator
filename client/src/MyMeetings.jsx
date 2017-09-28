import React from 'react';
import ReactDOM from 'react-dom';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import Navbar from './Navbar.jsx';
const axios = require('axios');

class MyMeetings extends React.Component {

  componentWillMount() {
    axios.get('/api/meetings')
      .then(data => {
        // console.log('returned data', data.data); //getting back data from req
        this.setState({ meetings: data.data });
        // console.log('state data after setState', this.state.meetings);
      })
      .catch(error => {
        console.log('error getting data');
      });
    }

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
    <Navbar />
      MY MEETINGS!
      {meetingItems}
    </div>
    );
  }
}

export default MyMeetings;
