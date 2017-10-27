import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import router from './router';
import { Link } from 'react-router-dom';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div id="app-nav">
          <Link to="/">Home View</Link>
          <Link to="/new-view">Show the New View</Link>
        </div>
        {router}
      </div>
    );
  }
}

export default App;
