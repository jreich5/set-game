import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <h1>Player {this.props.player.playerNo}</h1>
        <div className="delete-player-area"><button className="delete-player-btn">&#x2716;</button></div>
        <h3>Name: {this.props.player.name}</h3>
        <h3>Score: {this.props.player.score} </h3>
        <button className="view-player-cards-btn">Cards</button>
        <button className="call-set-btn">Set!</button>
      </div> 
    );
  }
}

export default Player;