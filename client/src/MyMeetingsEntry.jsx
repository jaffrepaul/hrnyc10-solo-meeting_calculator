import React from 'react';
import ReactDOM from 'react-dom';

class MyMeetingsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

  render() {
    return (
      <div className="txn-row">
        <div className="txn-data">{this.props.item.name}</div>
        <div className="txn-data">{this.props.item.duration}</div>
        <div className="txn-data">{this.props.item.attendees}</div>
        <div className="txn-data">{this.props.item.salary}</div>
      </div>
    );
  }
}

export default MyMeetingsEntry;
