import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Column from '../Column/Column';
import AddColumn from '../AddColumn/AddColumn';
import { loadBoard } from '../../redux/actions/boardActions';

class Board extends Component {
  componentDidMount() {
    this.props.loadBoard(this.props.id);
  }

  render() {
    if (this.props.loading) {
      return <p>Loading Board...</p>;
    }

    const { error } = this.props;
    if (error) {
      let message;

      switch (error.status) {
        case 404:
          message = 'Are you lost? This board does not exist! 😢';
          break;
        case 403:
          message = 'No peeking! You are not allowed to view this board! ⛔';
          break;
        default:
          message = 'Oops! Something went wrong 😢';
          break;
      }

      return (
        <>
          <p>{message}</p>
          <button
            style={{ width: 'fit-content' }}
            onClick={() => this.props.loadBoard(this.props.id)}>
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
