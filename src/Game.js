import React, { Component } from 'react';
import Board from './Board.js';
import GameController from './GameController.js';

class Game extends Component {

  state = {
    boardCards: [],
    cardsInDeck: [],
    players: [],
    gameIsOn: false,
    setInPlay: false
  }

  // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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

  addPlayer = () => {
    const playerNo = (this.state.players.length !== 0) ? this.state.players[this.state.players.length -1].playerNo + 1 : 1;
    const score = 0;
    const name = "";
    const playerCards = [];
    return {playerNo, score, name, playerCards};
  }

  deletePlayer = (playerNo) => {
    this.setState(state => {players: state.players.filter(player => player.playerNo !== playerNo)});
  }

  startGame = (reset = false) => {
    const cards = this.props.cards.slice(0);
    this.shuffle(cards);
    const boardCards = cards.splice(0, 12);
    const cardsInDeck = cards;
    const players = [this.addPlayer()];
    const gameIsOn = true;
    const setInPlay = false;

    this.setState({boardCards, cardsInDeck, players, gameIsOn, setInPlay});
  }

  // setSetInPlay = bool => {
  //   this.setState({setInPlay: bool});
  // }

  // addCardToSet = (playerId, cardId) => {
  //   if () {

  //   }
  // }

  endGame = () => {

  }

  newGame = () => {

  }

  addCards = () => {
    
  }

  startSet = () => {

  }

  shuffleCards = () => {

  }

  render() {
    return (
      <main>
        <header>
          <h1>Welcome to Set!</h1>
        </header>
        {console.log(this.state.players.length)}
        <Board boardCards={this.state.boardCards} setInPlay={this.setInPlay} />
        <GameController 
          startGame={this.startGame} 
          cardsInDeck={this.state.cardsInDeck} 
          noOfPlayers={this.state.players.length} 
          gameIsOn={this.state.gameIsOn}
          addCards={this.state.addCards}
        />
      </main>
    );
  }
}

export default Game;