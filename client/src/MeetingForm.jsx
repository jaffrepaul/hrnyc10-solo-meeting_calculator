import React from 'react';
import ReactDOM from 'react-dom';
import MeetingResults from './MeetingResults.jsx';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

	handleClick(e) {
  /* calculation:
  260 working days (minus weekends, etc)
  sal/260 = paid per day / 8hr = cost per person per hour / 60 cost per person per minute
  e.g per person...100,000/260 = 384 / 8 / 60 = 0.80128205128 */

    e.preventDefault();
    let name = this.state.meetingName;
    let duration = this.state.meetingDuration;
    let attendees = this.state.meetingAttendees;
    let salary = this.state.attendeeSalary;
    let totalPerPerson = salary / 260 / 8 / 60 * 100;
    let total = Math.floor(totalPerPerson * attendees);

    this.setState({
      meetingTotal: total
    });

	}

  handleSubmit(e) {
  console.log('hello from submit button');
  // preventDefault();
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

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      meetingName: '',
      meetingDuration: '',
      meetingAttendees: '',
      attendeeSalary: '',
      meetingTotal: ''
    });
  }

  render() {
    return (
      <div>
      <br />
        <p><strong>Enter Meeting Info:</strong></p>
         <form>
            <div>
              <label>Meeting Name</label>
              <input onChange={this.handleName} type="text" id="meetingname" name="meeting_name" value={this.state.meetingName}/>
            </div>
            <div>
              <label>Meeting Duration</label>
              <input onChange={this.handleDuration} type="number" id="meetingduration" name="meeting_duration" value={this.state.meetingDuration}/>
            </div>
            <div>
              <label>Meeting Attendees</label>
              <input onChange={this.handleAttendees} type="number" id="meetingattendees" name="meeting_attendees" value={this.state.meetingAttendees}/>
            </div>
            <div>
              <label>Average Attendee Salary</label>
              <input onChange={this.handleSalary} type="text" id="attendeesalary" name="meeting_salary" value={this.state.attendeeSalary}/>
            </div><br />
           <div className="button">
              <button onClick={this.handleClick} className="btn btn-primary" type="submit">Get Meeting Cost</button>
              <button onClick={this.handleClearForm} className="btn btn-sm btn-link" type="submit">Start over</button>
           </div>
           <br />
        </form>

        <hr/>

        {this.state.meetingTotal ? <MeetingResults meetings={this.state} /> : <div></div>}

      </div>
    );
  }
}

export default MeetingForm;
