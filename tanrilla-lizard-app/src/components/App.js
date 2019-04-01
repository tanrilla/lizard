import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Login from './auth/Login';

class App extends Component {

  render() {
    return (
      <div>
          <Login />
      </div>
    );
  }
}

export default App;
