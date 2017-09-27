import React from 'react';
import ReactDOM from 'react-dom';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';

class MyMeetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // console.log(this.props); //array of state data
    let meetingItems;

    if (this.props.meetings) {
      meetingItems = this.props.meetings.map(meeting => {
        // console.log(meeting); // individual meeting item
        return (
          <MyMeetingsEntry key={meeting.name} meeting={meeting} />
        );
      });
    }

    return (
    <div>
      {meetingItems}
    </div>
    );
  }
}

export default MyMeetings;
