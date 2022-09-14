import { LANGUAGE_CHANGE } from '../actions';

const INITIAL_STATE = {
  language: 'pt-br',
};

function language(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LANGUAGE_CHANGE:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default language;
