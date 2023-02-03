/* eslint-disable implicit-arrow-linebreak */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newInstrumentReducer } from '../components/AddInstrument';
import authReducer from './Auth/auth';
import instrumentsReducer from './instruments';

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  instruments: instrumentsReducer,
  instrument: newInstrumentReducer,
});

// store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
