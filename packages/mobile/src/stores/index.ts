import { createStore } from 'redux';

const INITIAL_STATE = {
  dropArea: null,
  releasedCards: []
};

function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_DROP_AREA':
      return { ...state, dropArea: action.dropArea };
    case 'DROP_CARD':
      return { ...state, releasedCards: [...state.releasedCards, state.card] };
    default:
      return state;
  }
}

const store = createStore(game);

export default store;
