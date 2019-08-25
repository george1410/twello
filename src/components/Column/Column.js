import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addCard,
  addCardToColumn,
  renameColumn
} from '../../redux/actions/boardActions';
import Card from '../Card/Card';
import styles from './Column.module.css';
import AddCard from '../AddCard/AddCard';
import ColumnTitle from '../ColumnTitle/ColumnTitle';

class Column extends Component {
  cardContainer = React.createRef();

  state = {
    added: false
  };

  handleNewCard = text => {
    this.props.addCard({ text });
    this.props.addCardToColumn({
      columnIndex: this.props.columnIndex,
      cardId: this.props.nextCardId
    });
    this.setState({
      added: true
    });
  };

  handleTitleSubmit = title => {
    this.props.renameColumn({
      columnIndex: this.props.columnIndex,
      title
    });
  };

  componentDidUpdate() {
    if (this.state.added) {
      this.cardContainer.current.scrollTo(
        0,
        this.cardContainer.current.scrollHeight * 2
      );
      this.setState({
        added: false
      });
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <ColumnTitle
          title={this.props.title}
          onSubmit={this.handleTitleSubmit}
        />
        <div className={styles.cardContainer} ref={this.cardContainer}>
          {this.props.cardIds.map(id =>
            this.props.cards.map(card => {
              if (card.id === id) {
                return (
                  <Card key={card.id} id={card.id}>
                    {card.text}
                  </Card>
                );
              }
              return null;
            })
          )}
        </div>
        <AddCard onSubmit={this.handleNewCard} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.board.cards
  };
};

const mapDispatchToProps = {
  addCard,
  addCardToColumn,
  renameColumn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
