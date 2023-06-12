/* eslint-disable react/prop-types */
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = ({ setTodo }) => {
  const todos = useSelector((state) => state.todoList);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} setTodo={setTodo} />
      ))}
    </>
  );
};

export default TodoList;
