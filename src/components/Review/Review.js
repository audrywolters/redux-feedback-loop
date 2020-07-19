import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component { 

    // send all feedback to the DB for saving
    onSubmitClick = () => {
        console.log( 'hey im submitting' );

        let feedback = {
            feeling: this.props.reduxState.feeling,
            understanding: this.props.reduxState.understand,
            support: this.props.reduxState.support,
            comments: this.props.reduxState.comment
        };

        axios.post( '/', feedback )
        .then( response =>{
            console.log( 'response: ', response );
            this.props.history.push( '/success');
        }).catch( ( error )=>{
            alert( 'Could not save feedback. Please again later' );
        })
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