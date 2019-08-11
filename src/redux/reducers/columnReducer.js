import { ADD_COLUMN } from '../actions/actionTypes';

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

    default:
      return state;
  }
}
