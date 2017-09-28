import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom'
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import App from './App.jsx';
import MeetingForm from './MeetingForm.jsx';
import MeetingResults from './MeetingResults.jsx';
import MyMeetings from './MyMeetings.jsx';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    return (

      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <a className="navbar-brand" to='/'>Meeting$$<span className="sr-only">(current)</span></a>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to='/meetings'>MyMeetings </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login'>Logout </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </div>

    );
  }
}

export default Navbar;



// <div>
// <Link to="/">Meeting$$</Link>
// <Link to="/meetings">MyMeetings</Link>
// <Link to="/login">Logout</Link>
// </div>
