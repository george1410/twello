import React from 'react';
import styles from './BoardPage.module.css';
import Board from '../Board/Board';

function BoardPage({ match }) {
  return (
    <div className={styles.root}>
      <h1>Twello</h1>
      <Board id={match.params.id} className={styles.board} />
    </div>
  );
}

export default BoardPage;
