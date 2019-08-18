import React, { Component } from 'react';
import styles from './AddCard.module.css';

export default class AddCard extends Component {
  textInput = React.createRef();
  wrapper = React.createRef();

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
    this.textInput.current.style.height = '0px';
  };

  handleSubmit = event => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
      this.textInput.current.style.height = '0px';
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

  handleClickOutside = () => {
    this.setState({
      open: false
    });
  };

  handleClickGlob = e => {
    if (this.wrapper.current.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  componentDidUpdate() {
    if (this.state.open) {
      this.textInput.current.focus();
      this.textInput.current.style.height = `${this.textInput.current
        .scrollHeight + 2}px`;
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickGlob, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickGlob, false);
  }

  render() {
    if (this.state.open) {
      return (
        <form onSubmit={this.handleSubmit} ref={this.wrapper}>
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
      <h2 className={styles.root} onClick={this.handleClick} ref={this.wrapper}>
        + Add New Card
      </h2>
    );
  }
}
