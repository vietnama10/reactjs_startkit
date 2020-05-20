import produce from 'immer';
import { PUT_EFFECT_MESSAGE } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  message: null
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case PUT_EFFECT_MESSAGE:
        draft.message = action.message
        return draft;
      default:
        return state;
    }
  });

export default homeReducer;