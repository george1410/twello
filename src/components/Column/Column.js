import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../redux/actions/cardActions';
import { addCardToColumn } from '../../redux/actions/columnActions';
import Card from '../Card/Card';
import styles from './Column.module.css';
import AddCard from '../AddCard/AddCard';

class Column extends Component {
  handleNewCard = text => {
    this.props.addCard({ text });
    this.props.addCardToColumn({
      columnIndex: this.props.columnIndex,
      cardId: this.props.nextCardId
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <div className={styles.cardContainer}>
          {this.props.cardIds.map(id =>
            this.props.cards.map(card => {
              if (card.id === id) {
                return <Card key={card.text}>{card.text}</Card>;
              }
              return null;
            })
          )}
        </div>
        <AddCard onSubmit={this.handleNewCard} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nextCardId: state.cards.nextId,
    cards: state.cards.cards
  };
};

const mapDispatchToProps = {
  addCard,
  addCardToColumn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
