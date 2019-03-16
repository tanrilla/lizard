import React, { Component } from 'react';
//import Layout from './Layout';
import Main from './Main';
import 'semantic-ui-css/semantic.min.css';
import MenuHeader from './MenuHeader';

class App extends Component {

  render() {
    return (
      <div>
          <MenuHeader />
          <Main />
      </div>
    );
  }
}

export default App;
