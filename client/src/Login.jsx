import React from 'react';
import Navbar from './Navbar.jsx';
import MeetingForm from './MeetingForm.jsx';
import MyMeetings from './MyMeetings.jsx';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import SignUp from './Signup.jsx';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // console.log(this.props.meetings);
    axios.get('/api/meetings')
      .then(data => {
        // console.log('returned data', data.data); //getting back data from req
        this.setState({ meetings: data.data });
        // console.log('state data after setState', this.state.meetings);
      })
      .catch(error => {
        console.log('error getting data');
      });
    }

    render() {
      // console.log(this.state.meetings);
      return (
        <div className="App">
          <br />
          <strong>My Meetings:</strong>
          <MyMeetings meetings={this.state.meetings}/>
        </div>
      );
    }
  }

export default Login;
