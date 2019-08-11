import React, { Component } from 'react';
import styles from './AddCard.module.css';

export default class AddCard extends Component {
  textInput = React.createRef();

  state = {
    open: false,
    text: ''
  };

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
    }
    if (event) {
      event.preventDefault();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  componentDidUpdate() {
    if (this.state.open) {
      this.textInput.current.focus();
    }
  }

  render() {
    if (this.state.open) {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea
            className={styles.textInput}
            value={this.state.text}
            placeholder='Enter text for this card...'
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            ref={this.textInput}
          />
          <input className={styles.submitBtn} type='submit' value='Add Card' />
        </form>
      );
    }

    return (
      <h2 className={styles.root} onClick={this.handleClick}>
        + Add New Card
      </h2>
    );
  }
}
