import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  render() {
    return (
      <div className="players">
        {this.props.players.map(player => <Player key={player.id} callSet={this.props.callSet} player={player} />)}
      </div>
    );
  }
}

export default Players;