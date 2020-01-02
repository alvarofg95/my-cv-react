import { CHANGE_LANGUAGE, LOAD_APP_INFO } from '../actions/actionTypes';

const initialState = {
  hasLoadedInfo: false,
  language: 'spanish'
};

export default (state = initialState, action = '') => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, hasLoadedInfo: true, language: action.payload };
    case LOAD_APP_INFO:
      return { ...action.payload, hasLoadedInfo: true };
    default:
      return state;
  }
};
