import { combineReducers } from 'redux';
import columns from './columnReducer';
import cards from './cardReducer';

export default combineReducers({
  columns,
  cards
});
