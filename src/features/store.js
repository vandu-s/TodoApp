import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
