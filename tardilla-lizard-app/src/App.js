import React, { Component } from 'react';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';

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
