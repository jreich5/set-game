import React, { Component } from 'react';

class Card extends Component {

    state = {
        isSelected: false
    }

    toggleSelected = () => {
        this.setState(state => ({isSelected: !state.isSelected}));
    }

    render() {
        return <div onClick={this.toggleSelected} className={`card ${(this.state.isSelected) ? "selected-card" : ""}`} style={{backgroundImage:`url(${'set-pngs/' + this.props.card.img})`}} />
    }
}

export default Card;