import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render() {
        return (
            <>
                <span>asdjfh</span>
            </>
        )
    }
}

const putReduxStateonProps = ( reduxState ) => ({
    feeling: reduxState.feeling
})
  
export default connect( putReduxStateonProps )( Review );