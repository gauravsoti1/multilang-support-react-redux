import {createStore, combineReducers} from 'redux';
import langReducer from './reducers/langReducer'

const rootReducer = combineReducers({
  lang: langReducer
})

const store = createStore(rootReducer)

// since we don't know the type of rootReducer, as it is a custom object
// we are using typeof
export type RootState = ReturnType<typeof rootReducer>;
export default store;