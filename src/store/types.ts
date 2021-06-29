export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface LangState {
  language: string;
}

interface SetLanguageAction {
  type: typeof SET_LANGUAGE; // I don't know why he has used typeof for defining type of type key
  // we could have straight away used string
  payload: string;
}

export type LangAction = SetLanguageAction;
