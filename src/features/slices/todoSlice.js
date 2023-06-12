import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: new Date().getTime().toString(),
  task: "",
  time: "",
  date: "",
  isCompleted: false,
  taskType: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      return { ...state, ...action.payload };
    },
    setTodoInitial: (state) => {
      return state.initialState;
    },
  },
});

export const { setTodo, setTodoInitial } = todoSlice.actions;
export default todoSlice.reducer;
