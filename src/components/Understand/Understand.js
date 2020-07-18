import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understand extends Component {

    // state is needed to disable button
    // if user hasn't chosen an understanding level
    state = {
        understand: ''
    }

    onUnderstandChange = ( event ) => {

        this.setState({
            understand: event.target.value
        })

        // send understand value to redux pot
        this.props.dispatch( { type: 'SET_UNDERSTAND', 
                               payload: { understand: event.target.value } } );
    }


    render() {

        return (
            <>
                <label>How well are you understanding the content?</label><br />

                {/* ONE */}
                <input onChange={ this.onUnderstandChange } 
                       type="radio" id="one" name="understand" value="1" />
                <label htmlFor="one">1</label>

                {/* TWO */}
                <input onChange={ this.onUnderstandChange } 
                       type="radio" id="two" name="understand" value="2" />
                <label htmlFor="two">2</label>

                {/* THREE */}
                <input onChange={ this.onUnderstandChange } 
                       type="radio" id="three" name="understand" value="3" />
                <label htmlFor="three">3</label>

                {/* FOUR */}
                <input onChange={ this.onUnderstandChange } 
                       type="radio" id="four" name="understand" value="4" />
                <label htmlFor="four">4</label>

                {/* FIVE */}
                <input onChange={ this.onUnderstandChange } 
                       type="radio" id="five" name="understand" value="5" />
                <label htmlFor="five">5</label>
                
                <br />

                <button disabled={ this.state.understand === '' }
                        // onClick={ () => this.props.history.push('/support') }
                        >Next</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) =>({
    understand: reduxState.understand
})
  
export default connect( putReduxStateonProps )( Understand );
