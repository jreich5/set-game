import React, { Component } from 'react';

class Timer extends Component {
  
  render() {
    return (
      <div>
        <h3>{`Player ${this.props.setInProgress.playerId} has ${this.props.setInProgress.timer} seconds to finish set`}</h3>
      </div>
    );
  }
}

export default Timer;