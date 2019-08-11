import { ADD_COLUMN, ADD_CARD_TO_COLUMN } from './actionTypes';

export const addColumn = payload => ({ type: ADD_COLUMN, payload });

export const addCardToColumn = payload => ({
  type: ADD_CARD_TO_COLUMN,
  payload
});
