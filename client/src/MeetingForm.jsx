import React from 'react';
import ReactDOM from 'react-dom';
import MeetingResults from './MeetingResults.jsx';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: '',
      meetingDuration: '',
      meetingAttendees: '',
      attendeeSalary: '',
      meetingCost: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleAttendees = this.handleAttendees.bind(this);
    this.handleSalary = this.handleSalary.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    let salary = this.state.attendeeSalary.replace(/[$,]/g, "") * 1.4;
    let totalPerPerson = salary / 365 / 8 / 60 * 100;
    let cost = Math.floor(totalPerPerson * attendees);

    this.setState({
      meetingCost: cost
    });

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

  handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      meetingName: '',
      meetingDuration: '',
      meetingAttendees: '',
      attendeeSalary: '',
      meetingCost: ''
    });
  }

  render() {
    return (
      <div className="form-container">
      <br />
         <form>
            <div>
              <label>Meeting Name
              <input onChange={this.handleName} onKeyDown={this.handleEnter} type="text" id="meetingname" className="form-control" name="meeting_name" value={this.state.meetingName} />
              </label>
            </div>
            <div>
              <label>Meeting Duration
                <select onChange={this.handleDuration} onKeyDown={this.handleEnter}  type="number" id="meetingduration" className="form-control" name="meeting_duration" value={this.state.meetingDuration}>
                  <option></option>
                  <option>30min</option>
                  <option>45min</option>
                  <option>1hr</option>
                  <option>1.5hr</option>
                  <option>2hr</option>
                  <option>2.5hr</option>
                  <option>3hr</option>
                  <option>NEVER meet this long!</option>
                </select>
              </label>
            </div>
            <div>
              <label>Meeting Attendees
              <select onChange={this.handleAttendees} onKeyDown={this.handleEnter} type="number" id="meetingattendees" className="form-control" name="meeting_attendees" value={this.state.meetingAttendees}>
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </label>
            </div>
            <div>
              <label>Average Attendee Salary
              <NumberFormat onChange={this.handleSalary} onKeyDown={this.handleEnter} type="text" id="attendeesalary" className="form-control" name="meeting_salary" thousandSeparator={true} prefix={'$'} value={this.state.attendeeSalary}/>
              </label>
            </div><br />
            <div className="button">
              <button onClick={this.handleClick} className="btn btn-primary" type="submit">Get Meeting Cost</button>
              <button onClick={this.handleClearForm} className="btn btn-sm btn-link" type="submit">Start over</button>
            </div>
           <br />
        </form>

        <div className="results-containder">
          {this.state.meetingCost ? <MeetingResults meetings={this.state} /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default MeetingForm;
