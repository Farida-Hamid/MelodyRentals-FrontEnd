import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import instrumentsReducer from './instruments';

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  instruments: instrumentsReducer,
});

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
