import React, { Component } from 'react';
import Game from './Game';

class App extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    fetch("cards.json")
      .then(res => res.json())
      .then(data => this.setState({cards: data}))
      .catch(e => console.error(e))
  }

  render() {
    return (
      <div className="">
        <Game cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
