import {
  ADD_COLUMN,
  ADD_CARD_TO_COLUMN,
  RENAME_COLUMN,
  ADD_CARD,
  UPDATE_CARD,
  LOAD_BOARD
} from './actionTypes';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateCard = payload => ({ type: UPDATE_CARD, payload });
export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const addCardToColumn = payload => ({
  type: ADD_CARD_TO_COLUMN,
  payload
});
export const renameColumn = payload => ({ type: RENAME_COLUMN, payload });
export const loadBoard = payload => ({ type: LOAD_BOARD, payload });
