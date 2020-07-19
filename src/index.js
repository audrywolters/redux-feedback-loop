import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// AUDRY - what is this and do I need it. we did fine w/o it in pizza parlor
import registerServiceWorker from './registerServiceWorker';
//
import App from './components/App/App';
import './index.css';


// catch the user's feeling of the day
const feeling = ( state='', action ) => {

    if ( action.type === 'SET_FEELING' ) {
        console.log('state', state)
        return action.payload;
    }
    return state;
}

// catch the user's understanding of content
const understand = ( state='', action ) => {

    if ( action.type === 'SET_UNDERSTAND' ) {
        return action.payload;
    }
    return state;
}

// catch the user's feeling of being supported
const support = ( state='', action ) => {

    if ( action.type === 'SET_SUPPORT' ) {
        return action.payload;
    }
    return state;
}

// catch the user's comments
const comment = ( state='', action ) => {

    if ( action.type === 'SET_COMMENT' ) {
        return action.payload;
    }
    return state;
}


// here is the redux bucket of fun data!
const storeInstance = createStore(
    // activate our listeners
    combineReducers( {
        feeling,
        understand,
        support,
        comment
    } ),
    // lets us use the v nice console display of all our data
    applyMiddleware( logger )
)

// render the stuff, lovingly cradled by redux
ReactDOM.render( <Provider store={ storeInstance }><App /></Provider>,
                 document.getElementById( 'root' ) );

// AUDRY - what is this and do I need it    
registerServiceWorker();
