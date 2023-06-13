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
      const filterType = action.payload;
      // Implement your filtering logic based on filterType
      let filteredTodos = [];

      if (filterType === "personal") {
        filteredTodos = state.filter((todo) => todo.taskType === "personal");
      } else if (filterType === "Freelance") {
        filteredTodos = state.filter((todo) => todo.taskType === "Freelance");
      } else if (filterType === "Work") {
        filteredTodos = state.filter((todo) => todo.taskType === "Work");
      } else {
        filteredTodos = state; // No filter, return all todos
      }

      return filteredTodos;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, filterTodos, getTodos } =
  todoListSlice.actions;

export default todoListSlice.reducer;
