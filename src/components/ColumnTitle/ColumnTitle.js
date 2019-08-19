import React, { Component } from 'react';
import styles from './ColumnTitle.module.css';

export default class ColumnTitle extends Component {
  textInput = React.createRef();
  wrapper = React.createRef();

  state = {
    editing: false,
    editText: this.props.title,
    justOpened: false
  };

  handleClick = () => {
    this.setState({
      editing: true,
      justOpened: true
    });
  };

  handleChange = event => {
    this.setState({
      editText: event.target.value
    });
    this.textInput.current.style.height = '0px';
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  handleSubmit = event => {
    if (this.state.editText) {
      this.props.onSubmit(this.state.editText);
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
      this.textInput.current.focus();
      this.textInput.current.style.height = `${this.textInput.current
        .scrollHeight + 2}px`;
    }
    if (this.state.justOpened) {
      this.textInput.current.select();
      this.setState({
        justOpened: false
      });
    }
  }

  handleClickOutside = () => {
    this.handleSubmit();
  };

  handleClickGlob = e => {
    if (!this.wrapper.current || this.wrapper.current.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickGlob, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickGlob, false);
  }

  render() {
    if (!this.state.editing) {
      return (
        <h2 className={styles.title} onClick={this.handleClick}>
          {this.props.title}
        </h2>
      );
    }

    return (
      <form onSubmit={this.handleSubmit} ref={this.wrapper}>
        <textarea
          className={styles.textInput}
          value={this.state.editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          ref={this.textInput}
        />
      </form>
    );
  }
}
