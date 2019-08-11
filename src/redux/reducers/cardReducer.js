import { ADD_CARD } from '../actions/actionTypes';

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

    default:
      return state;
  }
}
