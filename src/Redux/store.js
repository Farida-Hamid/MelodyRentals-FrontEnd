import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import instrumentsReducer from './instruments';

const rootReducer = combineReducers({
  instruments: instrumentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
