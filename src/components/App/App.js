import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Router>
          <Route exact path="/" component={ Feeling } />
        </Router>

      </>
    );
  }
}

export default App;
