import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    
    onFeelingChange = () => {
        // get feeling input value
        console.log( this.props );
        // send feeling value to redux pot
        this.props.dispatch( { type: 'SET_FEELING', 
                               payload: { feeling: this.props.feeling } } );
    }

    render() {

        return (
            <>
                <label>How are you feeling today?</label>
                <input onChange={ this.onFeelingChange } type="number" min="0" max="5" value="0" />
                <button>Next</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) =>({
    feeling: reduxState.feeling
})
  
export default connect( putReduxStateonProps )( Feeling );
