import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import "./styles/global.scss";
import { todoList } from "./data/data";
import { addTodo } from "./features/slices/todoListSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    todoList.forEach((todo) => dispatch(addTodo(todo)));
  }, []);
  return (
    <div className="color">
      <Layout />
    </div>
  );
}

export default App;
