import React, { Component } from 'react';
import Main from './Main';
import 'semantic-ui-css/semantic.min.css';
import MenuHeader from './MenuHeader';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <MenuHeader />
              <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
