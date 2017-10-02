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
import MyMeetingsResults from './MeetingResults.jsx';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <a className="navbar-brand" href="/">
      <img src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/dollar-collection-icon.png" width="35" height="35" className="d-inline-block align-top" alt="" />
    </a>
      <NavLink className="navbar-brand" to='/'>MeetingMoney<span className="sr-only">(current)</span></NavLink>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to='/meetings'></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login'>MyMeetings </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/meetings" component={MyMeetings}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  </Router>,
document.getElementById('app')
);

// <App />
