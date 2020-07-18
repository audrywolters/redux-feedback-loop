import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Router> 
          <Route exact path="/" component={ Feeling } />
          <Route path="/understand" component={ Understand } />
          <Route path="/support" component={ Support } />
          <Route path="/comment" component={ Comment } />
          <Route path="/review" component={ Review } />
        </Router>

      </>
    );
  }
}

export default App;
