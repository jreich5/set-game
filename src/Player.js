import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <h1>Player {this.props.player.playerNo}</h1>
        <button className="delete-player-btn">Delete Player</button>
        <button className="call-set-btn">Set!</button>
        <h3>Name: {this.props.player.name}</h3>
        <h3>Score: {this.props.player.score} </h3>
        <button className="view-player-cards-btn">View Player Cards</button>
      </div> 
    );
  }
}

export default Player;