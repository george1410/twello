import React from 'react';
import styles from './BoardPage.module.css';
import Board from '../Board/Board';

function BoardPage() {
  return (
    <div className={styles.root}>
      <h1>Twello</h1>
      <Board className={styles.board} />
    </div>
  );
}

export default BoardPage;
