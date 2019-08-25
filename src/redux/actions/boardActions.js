import {
  ADD_COLUMN,
  ADD_CARD_TO_COLUMN,
  RENAME_COLUMN,
  ADD_CARD,
  UPDATE_CARD,
  LOAD_BOARD_BEGIN,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE
} from './actionTypes';
import boardApi from '../../api/boardApi';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateCard = payload => ({ type: UPDATE_CARD, payload });
export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const addCardToColumn = payload => ({
  type: ADD_CARD_TO_COLUMN,
  payload
});
export const renameColumn = payload => ({ type: RENAME_COLUMN, payload });

export const loadBoardBegin = payload => ({ type: LOAD_BOARD_BEGIN });
export const loadBoardSuccess = payload => ({
  type: LOAD_BOARD_SUCCESS,
  payload
});
export const loadBoardFailure = payload => ({
  type: LOAD_BOARD_FAILURE,
  payload
});

export const loadBoard = boardId => {
  return dispatch => {
    dispatch(loadBoardBegin());
    return boardApi
      .getBoard(boardId)
      .then(res => {
        dispatch(loadBoardSuccess(res.data));
      })
      .catch(error => {
        dispatch(loadBoardFailure(error));
      });
  };
};
