import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

    // state not necessary for comments
    // as they are not required ( user can leave it empty )

    onCommentChange = ( event ) => {

        // send comments to redux basket
        this.props.dispatch( { type: 'SET_COMMENT', 
                               payload: event.target.value } );
    }

    
    render() {

        return (
            <>
                <h3>Any comments you want to leave?</h3>

                <textarea onChange={ this.onCommentChange }></textarea>
                
                <br /><br />

                <button onClick={ () => this.props.history.push( '/review' ) }
                        >Review Submission</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) => ({
    comment: reduxState.comment
})

export default connect( putReduxStateonProps )( Comment );