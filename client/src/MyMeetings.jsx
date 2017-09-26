import React from 'react';
import ReactDOM from 'react-dom';

class MyMeetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

  render() {
    return (
    <div>

      <h3>MyMeetings</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Name</div>
          <div className="txn-data">Duration</div>
          <div className="txn-data">Attendees</div>
          <div className="txn-data">Salary</div>
        </div>

      </div>

    </div>
    );
  }
}

export default MyMeetings;

// <div>
//   {this.props.data.map((item, i) => (
//     <MyMeetingsEntry item={item} key={i} />
//   ))}
// </div>
