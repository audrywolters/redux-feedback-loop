import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

    // state is needed to disable button
    // if user hasn't chosen an understanding level
    // state = {
    //     understand: ''
    // }

    onCommentChange = ( event ) => {

        // this.setState({
        //     understand: event.target.value
        // })

        // send understand value to redux pot
        this.props.dispatch( { type: 'SET_COMMENT', 
                               payload: { understand: event.target.value } } );
    }

    coolFunction = ( event ) => {
        console.log( event.target.value );
    }

    render() {

        return (
            <>
                <label>Any comments you want to leave?</label><br />

                <textarea onChange={ this.coolFunction }></textarea>
                <br />

                <button onClick={ () => this.props.history.push( '/review' ) }
                        >Review Submission</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) =>({
    understand: reduxState.understand
})

export default connect( putReduxStateonProps )( Comment );