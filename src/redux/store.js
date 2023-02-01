import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/auth';
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
