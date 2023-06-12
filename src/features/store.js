import { configureStore } from "@reduxjs/toolkit";
import { todoListSlice } from "./slices/todoListSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  todoList: todoListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
