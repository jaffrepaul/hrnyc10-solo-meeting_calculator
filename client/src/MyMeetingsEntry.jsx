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
      <li>
        {this.props.meeting.name}
      </li>
    );
  }
}

export default MyMeetingsEntry;
