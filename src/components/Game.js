import React, { Component } from 'react';
import Board from './Board.js';
import GameController from './GameController.js';
import Players from './Players.js';
import Timer from './Timer.js';
import Card from '../entities/Card.js';
import Player from '../entities/Player.js';
import GameSet from '../entities/GameSet.js';

class Game extends Component {

  state = {
    boardCards: [],
    cardsInDeck: [],
    players: [],
    gameIsOn: false,
    setInProgress: null
  }

  allSameOrDiff = values => {
    let valuesSetLength = new Set(values).size;
    return valuesSetLength === values.length || valuesSetLength === 1;
  }

  checkSet = set => {
    let colors = set.map(({color}) => color);
    let shapes = set.map(({shape}) => shape);
    let numbers = set.map(({number}) => number);
    let patterns = set.map(({pattern}) => pattern);
    return (this.allSameOrDiff(colors) && this.allSameOrDiff(shapes) && this.allSameOrDiff(numbers) && this.allSameOrDiff(patterns));
  }

  generatePlayerId = () => {
    if (this.state.players.length !== 0) {
      console.log(this.state.players.length, "this.state.players.length");
      return this.state.players[this.state.players.length -1].id + 1;
    }
    return 1;
  }

  addPlayer = () => {
    this.setState(state => {

      const id = this.generatePlayerId();
      console.log(id);

      return {
        players: state.players.concat([new Player(id)])
      };
    }); 
  }

  deletePlayer = (id) => {
    this.setState(state => ({players: state.players.filter(player => player.id !== id)}));
  }

  startGame = () => {
    const cards = Card.createCards(this.props.cards.slice(0));
    Card.shuffle(cards);
    const boardCards = cards.splice(0, 12);
    const cardsInDeck = cards;
    if (this.state.players.length === 0) {
      this.addPlayer();
    }
    const gameIsOn = true;
    const setInPlay = false;

    this.setState({boardCards, cardsInDeck, gameIsOn, setInPlay});
  }

  callSet = (e) => {
    alert("Set in progress!");
    this.setState({setInProgress: new GameSet(e.target.getAttribute('data-id'))});
    setTimeout(function() {
      console.log(this.state.setInProgress);
    }.bind(this), 2000);
    // set timer
    // allow cards to be selected
  }

  endGame = () => {

  }

  addCards = () => {
    if (this.state.cardsInDeck.length > 0 && this.state.boardCards.length < 18) {
      let additionalCards;
      if (this.state.cardsInDeck.length > 3) {
        additionalCards = this.state.cardsInDeck.slice(0, 3);
        this.setState(state => {
          return state.cardsInDeck.filter((_, i) => i >= 3)
        });
      } else {
        additionalCards = this.state.cardsInDeck.slice(0);  
        this.setState({cardsInDeck: []});
      }
      this.setState(state => ({boardCards: state.boardCards.concat(additionalCards)}));
    } else {
      if (!this.state.cardsInDeck.length > 0) {
        alert("No cards left in deck!");
      } else {
        alert("Cannot exceed 18 cards!");
      }
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>Welcome to Set!</h1>
          {
            (this.state.setInProgress) ? <Timer setInProgress={this.state.setInProgress} /> : null
          }
        </header>
        <GameController 
          startGame={this.startGame} 
          cardsInDeck={this.state.cardsInDeck} 
          noOfPlayers={this.state.players.length} 
          gameIsOn={this.state.gameIsOn}
          addCards={this.addCards}
          addPlayer={this.addPlayer}
        />
        <Board boardCards={this.state.boardCards} setInPlay={this.setInPlay} />
        <Players callSet={this.callSet} players={this.state.players} />
      </main>
    );
  }
}

export default Game;