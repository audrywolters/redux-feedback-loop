import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';

class App extends Component {

  componentDidMount(){
    //this.props.dispatch({type: 'POST_METHOD', payload: this.saveFeedback})
  }

  saveFeedback = ( customer ) => {
    axios.post( '/api/order', customer )
    .then( response =>{
      console.log( 'response: ',response );
    }).catch( ( error )=>{
      alert( 'Could not save feedback. Please try again later' );
    })
  }


  render() {
    return (
      <>
        <Header />

        <Router> 
          <Route exact path="/"     component={ Feeling } />
          <Route path="/understand" component={ Understand } />
          <Route path="/support"    component={ Support } />
          <Route path="/comment"    component={ Comment } />
          <Route path="/review"     component={ Review } />
          <Route path="/success"    component={ Success } />
        </Router>

      </>
    );
  }
}


export default App;
