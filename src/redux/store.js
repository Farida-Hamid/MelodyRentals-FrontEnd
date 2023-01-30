import { combineReducers, configureStore } from "@reduxjs/toolkit";

// root Reducer
const rootReducer = combineReducers({});

// store
const store = configureStore({
  reducer: rootReducer,
});
