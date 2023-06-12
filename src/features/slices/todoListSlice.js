import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    getTodos: (state) => {
      return state;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.payload.id);
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    },
    filterTodos: (state, action) => {
      const taskType = action.payload;
      const filteredTodos = state.filter((todo) => todo.taskType === taskType);
      return filteredTodos;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, filterTodos, getTodos } =
  todoListSlice.actions;

export default todoListSlice.reducer;
