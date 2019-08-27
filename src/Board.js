import React, { Component } from 'react';
import Cards from './Cards';

class Board extends Component {

  state = {
    setCounter: 0
  }

  render() {
    return (
      <Cards boardCards={this.props.boardCards} />
    );
  }
}

export default Board;