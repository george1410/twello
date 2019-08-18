import { ADD_CARD, UPDATE_CARD } from '../actions/actionTypes';

const initialState = {
  nextId: 1,
  cards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        nextId: state.nextId + 1,
        cards: [...state.cards, { text: action.payload.text, id: state.nextId }]
      };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              ...action.payload
            };
          }
          return card;
        })
      };
    default:
      return state;
  }
}
