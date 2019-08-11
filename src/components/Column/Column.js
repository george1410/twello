import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../redux/actions/cardActions';
import styles from './Column.module.css';

const Column = ({ title, children, addCard }) => {
  const handleNewCard = () => {
    addCard({ text: 'this card is in redux!' });
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>{children}</div>
      <h2 className={styles.addCard} onClick={handleNewCard}>
        + Add New Card
      </h2>
    </div>
  );
};

const mapDispatchToProps = {
  addCard
};

export default connect(
  null,
  mapDispatchToProps
)(Column);
