import {
  ADD_CARD_TO_COLUMN,
  RENAME_COLUMN,
  ADD_CARD,
  UPDATE_CARD,
  LOAD_BOARD_BEGIN,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE,
  ADD_COLUMN_BEGIN,
  ADD_COLUMN_SUCCESS,
  ADD_COLUMN_FAILURE
} from './actionTypes';
import boardApi from '../../api/boardApi';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateCard = payload => ({ type: UPDATE_CARD, payload });
export const addCardToColumn = payload => ({
  type: ADD_CARD_TO_COLUMN,
  payload
});
export const renameColumn = payload => ({ type: RENAME_COLUMN, payload });

const loadBoardBegin = () => ({ type: LOAD_BOARD_BEGIN });
const loadBoardSuccess = payload => ({
  type: LOAD_BOARD_SUCCESS,
  payload
});
const loadBoardFailure = payload => ({
  type: LOAD_BOARD_FAILURE,
  payload
});

export const loadBoard = boardId => {
  return dispatch => {
    dispatch(loadBoardBegin());
    return boardApi
      .getBoard(boardId)
      .then(data => dispatch(loadBoardSuccess(data)))
      .catch(error => dispatch(loadBoardFailure(error)));
  };
};

const addColumnBegin = () => ({ type: ADD_COLUMN_BEGIN });
const addColumnSuccess = payload => ({ type: ADD_COLUMN_SUCCESS, payload });
const addColumnFailure = payload => ({ type: ADD_COLUMN_FAILURE, payload });

export const addColumn = (boardId, columnName) => {
  return dispatch => {
    dispatch(addColumnBegin());
    return boardApi
      .postColumn(boardId, columnName)
      .then(data => dispatch(addColumnSuccess(data)))
      .catch(error => dispatch(addColumnFailure(error)));
  };
};
