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
import {BrowserRouter, Route, Switch, browserHistory, Redirect} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter basename='/' >
    <Switch>
      <Route path="/" component={App}/>
      <Route path="/results" component={MeetingResults}/>
      <Route path="/meetings" component={MyMeetings}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </BrowserRouter>,
document.getElementById('app')
);
