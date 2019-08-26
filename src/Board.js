import React, { Component } from 'react';
import Cards from './Cards';

class Board extends Component {

  state = {
    setCounter: 0
  }

  render() {
    return (
      <div>
        <Cards boardCards={this.props.boardCards} />
      </div>
    );
  }
}

export default Board;