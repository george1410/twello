import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.css';
import { updateCard } from '../../redux/actions/cardActions';

class Card extends Component {
  editBox = React.createRef();
  editWrapper = React.createRef();

  state = {
    justOpened: false,
    editing: false,
    editText: this.props.children
  };

  onEditClick = () => {
    this.setState({
      editing: true,
      justOpened: true
    });
  };

  handleChange = event => {
    this.setState({
      editText: event.target.value
    });
    this.editBox.current.style.height = '0px';
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  handleSubmit = event => {
    if (this.state.editText) {
      this.props.updateCard({ id: this.props.id, text: this.state.editText });
      this.setState({
        editing: false
      });
    }
    if (event) {
      event.preventDefault();
    }
  };

  componentDidUpdate() {
    if (this.state.editing) {
      this.editBox.current.focus();
      this.editBox.current.style.height = `${this.editBox.current.scrollHeight +
        2}px`;
    }
    if (this.state.justOpened) {
      this.editBox.current.select();
      this.setState({
        justOpened: false
      });
    }
  }

  handleClickGlob = e => {
    if (
      !this.editWrapper.current ||
      this.editWrapper.current.contains(e.target)
    ) {
      return;
    }
    this.handleClickOutside();
  };

  handleClickOutside = () => {
    this.setState({
      editing: false
    });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickGlob, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickGlob, false);
  }

  render() {
    const editMode = (
      <form onSubmit={this.handleSubmit} ref={this.editWrapper}>
        <textarea
          className={styles.textInput}
          value={this.state.editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          ref={this.editBox}
        />
        <input className={styles.submitBtn} type='submit' value='Save' />
      </form>
    );

    return this.state.editing ? (
      editMode
    ) : (
      <div className={styles.root}>
        <div className={styles.edit} onClick={this.onEditClick}>
          <FontAwesomeIcon icon='pencil-alt' />
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateCard
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
