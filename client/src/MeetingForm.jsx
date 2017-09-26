import React from 'react';
import ReactDOM from 'react-dom';

class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

  render() {
    return (
      <div>
         <form action="/meetings" method="post">
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
