import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Column from '../Column/Column';
import AddColumn from '../AddColumn/AddColumn';

class Board extends Component {
  render() {
    return (
      <div className={`${styles.scroll} ${this.props.className}`}>
        <div className={styles.root}>
          {this.props.columns.map((column, index) => (
            <Column
              title={column.title}
              key={column.title}
              cardIds={column.cards}
              columnIndex={index}
            />
          ))}
          <AddColumn />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    columns: state.columns.columns
  };
}

export default connect(mapStateToProps)(Board);
