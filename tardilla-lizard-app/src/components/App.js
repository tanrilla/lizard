import React, { Component } from 'react';
import Layout from './Layout';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
