import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';


class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
         <form>
            <div>
                <label>Meeting Name:</label>
                <input type="text" id="meetingname" name="meeting_name"/>
            </div>
            <div>
                <label>Meeting Duration:</label>
                <input type="text" id="meetingduration" name="meeting_duration"/>
            </div>
            <div>
                <label>Meeting Attendees:</label>
                <input type="text" id="meetingattendees" name="meeting_attendees"/>
            </div>
            <div>
                <label>Average Attendee Salary:</label>
                <input type="text" id="attendeesalary" name="meeting_salary"/>
            </div>

            <div className="button">
              <button type="submit">Get Meeting Cost</button>
            </div>
        </form>
      </div>
    );
  }
}

export default MeetingForm;
