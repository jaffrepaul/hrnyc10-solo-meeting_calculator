import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import axios from 'axios';


class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: '',
      meetingDuration: '',
      meetingAttendees: '',
      attendeeSalary: '',
    };
    this.handleName = this.handleName.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleAttendees = this.handleAttendees.bind(this);
    this.handleSalary = this.handleSalary.bind(this);
  }

	handleSubmit(e){
    e.preventDefault();
    // console.log('hi');
    // axios.post('/meetings', {
		// 	meetingName: this.state.meetingName,
		// 	meetingDuration: this.state.meetingDuration,
		// 	meetingAttendees: this.state.meetingAttendees,
		// 	attendeeSalary: this.state.attendeeSalary,
		// })
		// .then((response) => {
		// 	console.log(response);
		// })
		// .catch((error) => {
		// 	console.log(error);
		// })
	}

  	handleName(e){
  		this.setState({meetingName: e.target.value});
  	}

  	handleDuration(e){
  		this.setState({meetingDuration: e.target.value});
  	}

  	handleAttendees(e){
  		this.setState({meetingAttendees: e.target.value});
  	}

  	handleSalary(e){
  		this.setState({attendeeSalary: e.target.value});
  	}

  render() {
    return (
      <div>
      <br />
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
            </div><br />

           <div className="button">
              <button onClick={this.handleSubmit} className="btn btn-primary" type="submit">Get Meeting Cost</button>
            </div>
        </form>
      </div>
    );
  }
}

export default MeetingForm;
