import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component { 

    // send all feedback to the DB for saving
    onSubmitClick = () => {
        console.log( 'hey' );
        // if DB is successful then on to the next page!
        this.props.history.push( '/success')
    }


    render() {
        return (
            <>
                <h3>Review Your Feedback</h3><br />
                
                <label>Feeling: </label>
                <span>{ this.props.reduxState.feeling }</span><br />
                
                <label>Understand: </label>
                <span>{ this.props.reduxState.understand }</span><br />
                
                <label>Support: </label>
                <span>{ this.props.reduxState.support }</span><br />
                
                <label>Comment: </label>
                <span>{ this.props.reduxState.comment }</span><br />

                <button onClick={ this.onSubmitClick }>Submit</button>
            </>
        )
    }
}


const reduxState = ( reduxState ) => ({
    reduxState
})

export default connect( reduxState )( Review );