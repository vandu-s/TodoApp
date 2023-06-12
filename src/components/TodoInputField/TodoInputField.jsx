/* eslint-disable react/prop-types */
import { useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import { addTodo } from "../../features/slices/todoListSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

import "./style.scss";

const TodoInputField = ({ todo, setTodo, initialState }) => {
  const [checked, setChecked] = useState("personal");
  const dispatch = useDispatch();

  const handleTaskType = (type) => {
    setTodo({ ...todo, taskType: type });
    setChecked(type);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
    setChecked("personal");
  };

  return (
    <div className="input__container">
      <form onSubmit={handleSubmit}>
        <div className="input__todoContainer">
          <div className="input__taskTypeIcons">
            {checked === "personal" ? (
              <Tooltip title="personal">
                <CheckCircleIcon className="checked__circleIcon personal__task" />
              </Tooltip>
            ) : (
              <Tooltip title="personal">
                <CircleIcon
                  className="circle personal__task"
                  onClick={() => handleTaskType("personal")}
                />
              </Tooltip>
            )}
            {checked === "Freelance" ? (
              <Tooltip title="Freelance">
                <CheckCircleIcon className="checked__circleIcon freelance__task" />
              </Tooltip>
            ) : (
              <Tooltip title="Freelance">
                <CircleIcon
                  className="circle freelance__task"
                  onClick={() => handleTaskType("Freelance")}
                />
              </Tooltip>
            )}

            {checked === "Work" ? (
              <Tooltip title="Work">
                <CheckCircleIcon className="checked__circleIcon work__task" />
              </Tooltip>
            ) : (
              <Tooltip title="Work">
                <CircleIcon
                  className="circle work__task"
                  onClick={() => handleTaskType("Work")}
                />
              </Tooltip>
            )}
          </div>
          <input
            type="text"
            name="task"
            value={todo.task}
            onChange={(e) => setTodo({ ...todo, task: e.target.value })}
            className="input__todo"
            placeholder="What is your next task?"
          />
          <div className="input__iconsContainer">
            <AccessAlarmsIcon className="input__icon" />
            <CalendarMonthIcon className="input__icon" />
            <button type="submit">
              <SendIcon className="input__icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInputField;
