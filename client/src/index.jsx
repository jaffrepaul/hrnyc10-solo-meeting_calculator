import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import App from './App.jsx';
import MeetingForm from './MeetingForm.jsx';
import MeetingResults from './MeetingResults.jsx';
import MyMeetings from './MyMeetings.jsx';
import MyMeetingsEntry from './MyMeetingsEntry.jsx';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <NavLink className="navbar-brand" to='/'>Meeting$$<span className="sr-only">(current)</span></NavLink>

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
      <Route exact path="/" component={App}/>
      <Route path="/meetings" component={MyMeetings}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>,
document.getElementById('app')
);

// <App />

// <BrowserRouter basename='/' >
// <Switch>
// <Route path="/" component={App}/>
// <Route path="/results" component={MeetingResults}/>
// <Route path="/meetings" component={MyMeetings}/>
// <Route path="/login" component={Login}/>
// </Switch>
// </BrowserRouter>,
