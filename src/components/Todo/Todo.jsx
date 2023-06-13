/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../features/slices/todoListSlice";
import { updateTodo } from "../../features/slices/todoListSlice";
import EditTodo from "../EditTodo/EditTodo";
import ReadTodo from "../ReadTodo/ReadTodo";
import "./style.scss";

const Todo = ({ id, task, isCompleted, taskType }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleTaskComplete = (id) => {
    const updatedTodo = {
      id: id,
      isCompleted: !isCompleted,
    };
    dispatch(updateTodo(updatedTodo));
  };
  return (
    <div className="todo_center">
      {isEdit ? (
        <EditTodo id={id} task={task} setIsEdit={setIsEdit} />
      ) : (
        <ReadTodo
          id={id}
          taskType={taskType}
          task={task}
          isCompleted={isCompleted}
          setIsEdit={setIsEdit}
          handleDeleteTodo={handleDeleteTodo}
          handleTaskComplete={handleTaskComplete}
        />
      )}
    </div>
  );
};

export default Todo;
