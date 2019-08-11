import { ADD_COLUMN, ADD_CARD_TO_COLUMN } from '../actions/actionTypes';

const initialState = {
  columns: []
};

export default function columnReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, { title: action.payload.title, cards: [] }]
      };

    case ADD_CARD_TO_COLUMN:
      return {
        ...state,
        columns: state.columns.map((column, index) => {
          if (index === action.payload.columnIndex) {
            return {
              ...column,
              cards: [...column.cards, action.payload.cardId]
            };
          }
          return column;
        })
      };

    default:
      return state;
  }
}
