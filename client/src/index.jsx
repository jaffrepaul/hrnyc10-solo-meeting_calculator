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
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div>
  <ul>
  <li><Link to="/">Meeting$$</Link></li>
  <li><Link to="/meetings">MyMeetings</Link></li>
  <li><Link to="/login">Logout</Link></li>
  </ul>

  <hr/>

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
