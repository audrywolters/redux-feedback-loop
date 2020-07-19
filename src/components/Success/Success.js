import React, { Component } from 'react';

class Success extends Component { 

    render() {
        return (
            <>
                <h3>Way to go dude</h3>
                <span>Your feedback was recieved.</span><br />
                <span>But would you like to re-do it?</span>

                <br /><br />
                
                <button onClick={ () => this.props.history.push( '/' ) }
                       >Do Over</button>            
            </>
        )
    }
}


export default Success;