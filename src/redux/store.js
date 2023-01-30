import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/auth";

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
