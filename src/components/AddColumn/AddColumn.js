import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addColumn } from '../../redux/actions/columnActions';
import styles from './AddColumn.module.css';

class AddColumn extends Component {
  state = {
    open: false,
    title: ''
  };

  titleInput = React.createRef();

  handleHeaderClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleSubmit = event => {
    if (this.state.title) {
      this.props.addColumn({ title: this.state.title, cards: [] });
      this.setState(prevState => ({
        open: !prevState.open,
        title: ''
      }));
    }
    event.preventDefault();
  };

  handleTyping = event => {
    this.setState({
      title: event.target.value
    });
  };

  componentDidUpdate() {
    if (this.state.open) {
      console.log('here');
      this.titleInput.current.focus();
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header} onClick={this.handleHeaderClick}>
          Add Another Column
        </div>
        {this.state.open && (
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <input
              className={styles.titleInput}
              onChange={this.handleTyping}
              value={this.state.title}
              placeholder='Column Title'
              ref={this.titleInput}
            />
            <input
              type='submit'
              className={styles.submitBtn}
              value='add that shit'
            />
          </form>
        )}
      </div>
    );
  }
}

const mapDispatchtoProps = {
  addColumn
};

export default connect(
  null,
  mapDispatchtoProps
)(AddColumn);
