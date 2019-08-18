import { ADD_CARD, UPDATE_CARD } from './actionTypes';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateCard = payload => ({ type: UPDATE_CARD, payload });
