import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// [add funcs or methods here - e.g func to handle form input *can set state in methods]

  render() {
    return (
      <div>
      Hello!!!!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
