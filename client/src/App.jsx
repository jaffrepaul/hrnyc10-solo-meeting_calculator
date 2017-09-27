import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import MeetingForm from './MeetingForm.jsx';
import MyMeetings from './MyMeetings.jsx';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: []
    };
  }

// methods:
// [] calculate meeting data
// [] click to save meeting data
// [] click on my meetings to render them

  // handleClick() {
  //
  // }
  //
  // handleClick() {
	// 		axios.post('/meetings', {})
  //     .then();
  // }
  //
  // handleClick() {
	// 		axios.get('/meetings', {})
  //     .then();
  // }

  // get data on pageload
  // componentWillMount() {
  //   axios.get('/api/meetings')
  //     .then(data => {
  //       // console.log('returned data', data.data);
  //       this.setState({ data: data });
  //       // console.log('state data after setState', this.state.data);
  //     })
  //     .catch(error => {
  //       console.log('error getting data');
  //     });
  // }

  componentWillMount() {
    // this.setState({ meetings: [
    //     {
    //       name: 'test meeting',
    //       duration: '60min',
    //       attendees: 6,
    //       salary: '101,000'
    //     },
    //     {
    //       name: 'test meeting2',
    //       duration: '45min',
    //       attendees: 6,
    //       salary: '105,000'
    //     },
    //     {
    //       name: 'test meeting3',
    //       duration: '600min',
    //       attendees: 6,
    //       salary: '600,000'
    //     }
    //   ]});

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
      return (
        <div className="App">
          <Navbar />
          <MeetingForm />
          <MyMeetings meetings={this.state.meetings}/>
        </div>
      );
    }
  }

export default App;
