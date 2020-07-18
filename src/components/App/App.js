import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Feeling />
      </>
    );
  }
}

export default App;
