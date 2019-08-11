import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../redux/actions/cardActions';
import { addCardToColumn } from '../../redux/actions/columnActions';
import Card from '../Card/Card';
import styles from './Column.module.css';

const Column = ({
  title,
  addCard,
  addCardToColumn,
  nextCardId,
  cardIds,
  cards,
  columnIndex
}) => {
  const handleNewCard = () => {
    addCard({ text: 'this card is in redux!' });
    addCardToColumn({ columnIndex: columnIndex, cardId: nextCardId });
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>
        {cardIds.map(id =>
          cards.map(card => {
            if (card.id === id) {
              return <Card key={card.text}>{card.text}</Card>;
            }
            return null;
          })
        )}
      </div>
      <h2 className={styles.addCard} onClick={handleNewCard}>
        + Add New Card
      </h2>
    </div>
  );
};

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
