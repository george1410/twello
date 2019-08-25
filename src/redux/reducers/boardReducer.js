import {
  ADD_COLUMN,
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
} from '../actions/actionTypes';

const initialState = {
  cards: [],
  columns: [],
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          nextId: state.cards.nextId + 1,
          cards: [
            ...state.cards.cards,
            { text: action.payload.text, id: state.cards.nextId }
          ]
        }
      };

    case UPDATE_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          cards: state.cards.map(card => {
            if (card.id === action.payload.id) {
              return {
                ...card,
                ...action.payload
              };
            }
            return card;
          })
        }
      };

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

    case RENAME_COLUMN:
      return {
        ...state,
        columns: state.columns.map((column, index) => {
          if (index === action.payload.columnIndex) {
            return {
              ...column,
              title: action.payload.title
            };
          }
          return column;
        })
      };

    case LOAD_BOARD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case LOAD_BOARD_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        columns: action.payload.columns,
        cards: action.payload.cards,
        loading: false
      };

    case LOAD_BOARD_FAILURE:
      return {
        ...state,
        columns: [],
        cards: [],
        loading: false,
        error: action.payload
      };

    case ADD_COLUMN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ADD_COLUMN_SUCCESS:
      return {
        ...state,
        columns: [...state.columns, action.payload],
        loading: false
      };

    case ADD_COLUMN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
