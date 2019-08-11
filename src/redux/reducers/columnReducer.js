import { ADD_COLUMN } from '../actions/actionTypes';

const initialState = {
  columns: [
    {
      title: 'First',
      cards: [
        { text: 'this is some card text' },
        { text: 'and some more text here' }
      ]
    },
    { title: 'Second', cards: [] }
  ]
};

export default function columnReducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [
          ...state.columns,
          { title: action.payload.title, cards: action.payload.cards }
        ]
      };

    default:
      return state;
  }
}
