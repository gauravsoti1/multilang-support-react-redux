import { SET_LANGUAGE, LangAction, LangState } from '../types';

const localStorageLang = localStorage.getItem('language');

const initialState: LangState = {
  language: localStorageLang || 'EN',
}

const langReducer = (state = initialState, action: LangAction) : LangState => {
  switch (action.type){
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

export default langReducer;