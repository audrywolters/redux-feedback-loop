import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

    // state not necessary for comments
    // as they are not required ( user can leave it empty )

    onCommentChange = ( event ) => {

        // send comments to redux pot
        this.props.dispatch( { type: 'SET_COMMENT', 
                               payload: { understand: event.target.value } } );
    }

    
    render() {

        return (
            <>
                <label>Any comments you want to leave?</label><br />

                <textarea onChange={ this.onCommentChange }></textarea><br />

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