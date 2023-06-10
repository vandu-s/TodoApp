import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export default TodoList;
