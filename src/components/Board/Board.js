import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Column from '../Column/Column';
import AddColumn from '../AddColumn/AddColumn';
import { loadBoard } from '../../redux/actions/boardActions';

class Board extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/boards/1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.loadBoard(data);
      });
  }

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
    columns: state.board.columns
  };
}

const mapDispatchToProps = {
  loadBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
