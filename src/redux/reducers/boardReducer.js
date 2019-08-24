import {
  ADD_COLUMN,
  ADD_CARD_TO_COLUMN,
  RENAME_COLUMN,
  ADD_CARD,
  UPDATE_CARD,
  LOAD_BOARD
} from '../actions/actionTypes';

const initialState = {
  cards: {
    nextId: 10,
    cards: []
  },
  columns: []
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

    case LOAD_BOARD:
      return {
        ...state,
        columns: action.payload.columns,
        cards: {
          ...state.cards,
          cards: action.payload.cards
        }
      };

    default:
      return state;
  }
}
