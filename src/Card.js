import React, { Component } from 'react';

class Card extends Component {
    render() {
        return <div className="Card" style={{backgroundImage:`url(${'set-pngs/' + this.props.card.img})`}} />
    }
}

export default Card;