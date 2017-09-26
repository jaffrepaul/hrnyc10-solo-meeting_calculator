import React from 'react';
import ReactDOM from 'react-dom';
// import { Route } from 'react-router';
// import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import MeetingForm from './MeetingForm.jsx';
const axois = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

// methods:
// [] calculate meeting data
// [] click to save meeting data
// [] click on my meetings to render them

  handleClick() {

  }

  handleClick() {
			axios.post('/meetings', {})
      .then();
  }

  handleClick() {
			axios.get('/meetings', {})
      .then();
  }

  render() {
    return (
      <div>
        <div>

        <Navbar />
        <MeetingForm />

        </div>
      </div>
    );
  }
}

export default App;
