import React from 'react';
import styles from './Column.module.css';

const Column = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>{children}</div>
      <h2 className={styles.addCard}>+ Add New Card</h2>
    </div>
  );
};

export default Column;
