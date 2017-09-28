import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';

class Navbar extends React.Component {

  render() {
    return (

        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
          <a class="navbar-brand">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdown09">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
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
