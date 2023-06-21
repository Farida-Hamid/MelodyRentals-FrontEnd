import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newInstrumentReducer } from '../components/AddInstrument';
import authReducer from './Auth/auth';
import instrumentsReducer from './instruments';
import reservationsReducer from './reservations';

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  instruments: instrumentsReducer,
  instrument: newInstrumentReducer,
  myreservations: reservationsReducer,
});

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
