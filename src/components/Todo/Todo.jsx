/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo } from "../../features/slices/todoListSlice";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { updateTodo } from "../../features/slices/todoListSlice";
import { IconButton, Tooltip } from "@mui/material";
import EditTodo from "../EditTodo/EditTodo";

import "./style.scss";

const Todo = ({ id, task, isCompleted, taskType }) => {
  const [isEdit, setIsEdit] = useState("");
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
        <EditTodo />
      ) : (
        <div className="todo__container">
          <div className="todo__contains">
            <CircleIcon
              className={`${
                taskType === "personal"
                  ? "personal__task"
                  : taskType === "Work"
                  ? "work__task"
                  : taskType === "Freelance"
                  ? "freelance__task"
                  : ""
              } circle`}
            />
            <p className="todo__value">{task}</p>
            <p>8:00PM</p>
            <div className="todo__icons">
              <IconButton onClick={() => handleTaskComplete(id)}>
                {isCompleted ? (
                  <Tooltip title="Completed">
                    <CheckCircleIcon className="todo__icon" />
                  </Tooltip>
                ) : (
                  <Tooltip title="Incompleted">
                    <RadioButtonUncheckedIcon className="todo__icon disable" />
                  </Tooltip>
                )}
              </IconButton>
              <IconButton onClick={() => setIsEdit(id)}>
                <Tooltip title="Edit Task">
                  <EditIcon className="todo__icon" />
                </Tooltip>
              </IconButton>
              <IconButton onClick={() => handleDeleteTodo(id)}>
                <Tooltip title="Delete Task">
                  <DeleteIcon className="todo__icon" />
                </Tooltip>
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
