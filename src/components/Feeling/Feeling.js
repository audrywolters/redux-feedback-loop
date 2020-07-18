import React, { Component } from 'react';

class Feeling extends Component {
  render() {
    return (
      <>
        <label>How are you feeling today?</label>
        <input type="number" min="0" max="5" value="0" />
        <button>Next</button>
      </>
    );
  }
}

export default Feeling;
