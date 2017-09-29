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

  // componentWillMount() {
  //   axios.get('/api/meetings')
  //     .then(data => {
  //       // console.log('returned data', data.data); //getting back data from req
  //       this.setState({ meetings: data.data });
  //       // console.log('state data after setState', this.state.meetings);
  //     })
  //     .catch(error => {
  //       console.log('error getting data');
  //     });
  //   }

    render() {
      return (
        <div className="App">
          <MeetingForm />
        </div>
      );
    }
  }

export default App;
