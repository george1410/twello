import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.css';

class Card extends Component {
  editBox = React.createRef();
  state = {
    editing: false,
    editText: this.props.children
  };

  onEditClick = () => {
    this.setState({
      editing: true
    });
  };

  handleChange = event => {
    this.setState({
      editText: event.target.value
    });
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  handleSubmit = event => {
    if (this.state.editText) {
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
      this.editBox.current.style.height = `${
        this.editBox.current.scrollHeight
      }px`;
    }
  }

  render() {
    const editMode = (
      <form onSubmit={this.handleSubmit}>
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

export default Card;
