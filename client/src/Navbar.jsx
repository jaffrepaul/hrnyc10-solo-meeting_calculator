import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
// import Login from './Login';
// import SignUp from './Signup';
// axios to handle logout & session

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

handleSignOut() {

}

  render() {
    return (
      <div>
        <Link to="/">Meeting$$</Link>
        <Link to="/meetings">MyMeetings</Link>
        <Link to="/login">Logout</Link>
      </div>
    );
  }
}

export default Navbar;
