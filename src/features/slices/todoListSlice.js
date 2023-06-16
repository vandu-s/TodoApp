import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id != action.payload.id);
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      state.data = state.data.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...action.payload } : todo
      );
      state.todos = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...action.payload } : todo
      );
    },
    filterTodos: (state, action) => {
      const taskType = action.payload;
      if (taskType.toLowerCase() === "all") {
        state.todos = state.data;
      } else if (taskType.toLowerCase() === "completed") {
        state.todos = state.data.filter((todo) => todo.isCompleted);
      } else {
        state.todos = state.data.filter((todo) => todo.taskType === taskType);
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, filterTodos } =
  todoListSlice.actions;

export default todoListSlice.reducer;
