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
      data: []
    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

// methods:
// [] calculate meeting data
// [] click to save meeting data
// [] click on my meetings to render them

  // get data on pageload
  componentWillMount() {
    axios.get('/api/meetings')
      .then(data => {
        // console.log('returned data', data.data);
        this.setState({ data: data });
        // console.log('state data after setState', this.state.data);
      })
      .catch(error => {
        console.log('error getting data');
      });
  }

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

  render() {
    return (
      <div>
        <div>

        <Navbar />
        <MeetingForm />
        <MyMeetings data={this.state.data}/>

        </div>
      </div>
    );
  }
}

export default App;
