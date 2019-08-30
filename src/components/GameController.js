import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameController extends Component {
  render() {
    return (
      <div className="game-controller">
        <button onClick={this.props.addCards} disabled={!this.props.gameIsOn}>Add Cards</button>
        <button onClick={this.props.addPlayer}>Add Player</button>
        <button onClick={this.props.startGame}>New Game</button>
        <button>End Game</button>
      </div>
    );
  }
}

GameController.propTypes = {
  cardsInDeck: PropTypes.array,
  noOfPlayers: PropTypes.number,
  gameIsOn: PropTypes.bool,
  startGame: PropTypes.func,
  addCards: PropTypes.func
}

export default GameController;