import React from 'react';
import styles from './App.module.css';
import Board from '../Board/Board';

function App() {
  return (
    <div className={styles.root}>
      <h1>Twello</h1>
      <Board className={styles.board} />
    </div>
  );
}

export default App;
