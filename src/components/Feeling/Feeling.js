import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    // state is needed to disable button
    // if user hasn't chosen a feeling
    state = {
        feeling: ''
    }

    onFeelingChange = ( event ) => {

        this.setState({
            feeling: event.target.value
        })

        // send feeling value to redux pot
        this.props.dispatch( { type: 'SET_FEELING', 
                               payload: { feeling: event.target.value } } );
    }


    render() {

        return (
            <>
                <label>How are you feeling today?</label><br />

                {/* ONE */}
                <input onChange={ this.onFeelingChange } 
                       type="radio" id="one" name="feeling" value="1" />
                <label htmlFor="one">1</label>

                {/* TWO */}
                <input onChange={ this.onFeelingChange } 
                       type="radio" id="two" name="feeling" value="2" />
                <label htmlFor="two">2</label>

                {/* THREE */}
                <input onChange={ this.onFeelingChange } 
                       type="radio" id="three" name="feeling" value="3" />
                <label htmlFor="three">3</label>

                {/* FOUR */}
                <input onChange={ this.onFeelingChange } 
                       type="radio" id="four" name="feeling" value="4" />
                <label htmlFor="four">4</label>

                {/* FIVE */}
                <input onChange={ this.onFeelingChange } 
                       type="radio" id="five" name="feeling" value="5" />
                <label htmlFor="five">5</label>
                
                <br />

                <button disabled={ this.state.feeling === '' }
                        onClick={ () => this.props.history.push( '/understand' ) }
                        >Next</button>
            </>
        );

    }
}

const putReduxStateonProps = ( reduxState ) => ({
    feeling: reduxState.feeling
})
  
export default connect( putReduxStateonProps )( Feeling );
