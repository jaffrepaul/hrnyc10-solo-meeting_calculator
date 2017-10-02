import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import MeetingForm from './MeetingForm.jsx';
import MyMeetings from './MyMeetings.jsx';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import MyMeetingsResults from './MeetingResults.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: []
    };
  }

    render() {
      return (
        <div className="App">
          <MeetingForm />
        </div>
      );
    }
  }

export default App;
