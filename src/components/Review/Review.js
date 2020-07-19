import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component { 

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

            </>
        )
    }
}


const reduxState = ( reduxState ) => ({
    reduxState
})

export default connect( reduxState )( Review );