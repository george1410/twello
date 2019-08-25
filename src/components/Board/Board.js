import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Column from '../Column/Column';
import AddColumn from '../AddColumn/AddColumn';
import { loadBoard } from '../../redux/actions/boardActions';

class Board extends Component {
  componentDidMount() {
    this.props.loadBoard(2);
  }

  render() {
    if (this.props.loading) {
      return <p>Loading Board...</p>;
    }

    if (this.props.error) {
      return (
        <>
          <p>Oops! Something went wrong :(</p>
          <button
            style={{ width: 'fit-content' }}
            onClick={() => this.props.loadBoard(1)}>
            Try again!
          </button>
        </>
      );
    }

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
    columns: state.board.columns,
    loading: state.board.loading,
    error: state.board.error
  };
}

const mapDispatchToProps = {
  loadBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
