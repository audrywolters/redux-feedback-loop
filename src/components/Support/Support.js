import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    // state is needed to disable button
    // if user hasn't chosen a support
    state = {
        support: ''
    }

    onSupportChange = ( event ) => {

        this.setState({
            support: event.target.value
        })

        // send support value to redux pot
        this.props.dispatch( { type: 'SET_SUPPORT', 
                               payload: { support: event.target.value } } );
    }

    render() {

        return (
            <>
                <label>How are you support today?</label><br />

                {/* ONE */}
                <input onChange={ this.onSupportChange } 
                       type="radio" id="one" name="support" value="1" />
                <label htmlFor="one">1</label>

                {/* TWO */}
                <input onChange={ this.onSupportChange } 
                       type="radio" id="two" name="support" value="2" />
                <label htmlFor="two">2</label>

                {/* THREE */}
                <input onChange={ this.onSupportChange } 
                       type="radio" id="three" name="support" value="3" />
                <label htmlFor="three">3</label>

                {/* FOUR */}
                <input onChange={ this.onSupportChange } 
                       type="radio" id="four" name="support" value="4" />
                <label htmlFor="four">4</label>

                {/* FIVE */}
                <input onChange={ this.onSupportChange } 
                       type="radio" id="five" name="support" value="5" />
                <label htmlFor="five">5</label>
                
                <br />

                <button disabled={ this.state.support === '' }
                        onClick={ () => this.props.history.push( '/comment' ) }
                        >Next</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) =>({
    support: reduxState.support
})
  
export default connect( putReduxStateonProps )( Support );
