import { useState } from "react";
import TodoInputField from "../TodoInputField/TodoInputField";
import TodoList from "../TodoList/TodoList";
import "./style.scss";

const Main = () => {
  const timestamp = new Date().getTime().toString();
  const randomString = Math.random().toString(36).substring(2, 8);
  const uniqueId = timestamp + randomString;

  const initialState = {
    id: uniqueId,
    task: "",
    time: "",
    date: "",
    isCompleted: false,
    taskType: "personal",
  };
  const [todo, setTodo] = useState(initialState);
  return (
    <div className="main_wrapper">
      <div className="main__container">
        <h1>Today main focus</h1>
        <h1>Design team meeting</h1>
        <TodoInputField
          todo={todo}
          setTodo={setTodo}
          initialState={initialState}
        />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default Main;
