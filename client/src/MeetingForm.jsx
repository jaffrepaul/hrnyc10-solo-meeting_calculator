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
      meetingTotal: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleAttendees = this.handleAttendees.bind(this);
    this.handleSalary = this.handleSalary.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(e){
    e.preventDefault();
    // console.log('hi');
    let name = this.state.meetingName;
    let duration = this.state.meetingDuration;
    let attendees = this.state.meetingAttendees;
    let salary = this.state.attendeeSalary;
    let total = Math.floor(duration + attendees + salary * 1.4);

    this.setState({
      meetingTotal: total
    });

	}

  // handleSubmit() {
  //
  // }

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
              <input onChange={this.handleName} type="text" id="meetingname" name="meeting_name" value={this.state.meetingName}/>
            </div>
            <div>
              <label>Meeting Duration:</label>
              <input onChange={this.handleDuration} type="number" id="meetingduration" name="meeting_duration" value={this.state.meetingDuration}/>
            </div>
            <div>
              <label>Meeting Attendees:</label>
              <input onChange={this.handleAttendees} type="number" id="meetingattendees" name="meeting_attendees" value={this.state.meetingAttendees}/>
            </div>
            <div>
              <label>Average Attendee Salary:</label>
              <input onChange={this.handleSalary} type="number" id="attendeesalary" name="meeting_salary" value={this.state.attendeeSalary}/>
            </div><br />

           <div className="button">
              <button onClick={this.handleClick} className="btn btn-primary" type="submit">Get Meeting Cost</button>
            </div>
        </form>
        <br />
        { this.state.meetingTotal ? <div><h3>{this.state.meetingName}</h3><span>{this.state.meetingTotal}</span></div> : <div></div> }

      </div>
    );
  }
}

export default MeetingForm;
