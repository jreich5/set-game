import React, { Component } from 'react';
import Card from './Card.js';

class Cards extends Component {
  render() {
    return (
      <div className="board-cards">
        {this.props.boardCards.map(card => <Card key={card.id} card={card} />)}
      </div>
    );
  }
}

export default Cards;