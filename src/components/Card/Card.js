import React from 'react';
import styles from './Card.module.css';

const Card = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Card;
