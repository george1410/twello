import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Column from '../Column/Column';
import Card from '../Card/Card';
import AddColumn from '../AddColumn/AddColumn';

class Board extends Component {
  render() {
    return (
      <div className={`${styles.root} ${this.props.className}`}>
        {this.props.columns.map(column => (
          <Column title={column.title} key={column.title}>
            {column.cards.map(card => (
              <Card key={card.text}>{card.text}</Card>
            ))}
          </Column>
        ))}
        <AddColumn />
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
