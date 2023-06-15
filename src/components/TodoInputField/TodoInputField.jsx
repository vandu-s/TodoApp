/* eslint-disable react/prop-types */
import { useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import { addTodo } from "../../features/slices/todoListSlice";
import { useDispatch } from "react-redux";
import TaskTypeIcons from "../TaskTypeIcons/TaskTypeIcons";
import catergory from "../../util/appUtil";
import "./style.scss";

const TodoInputField = ({ todo, setTodo, initialState }) => {
  const [checked, setChecked] = useState(catergory.PERSONAL);
  const dispatch = useDispatch();

  const handleTaskType = (type) => {
    setTodo({ ...todo, taskType: type });
    setChecked(type);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
    setChecked(catergory.PERSONAL);
  };

  return (
    <div className="input__container">
      <form onSubmit={handleSubmit}>
        <div className="input__todoContainer">
          <div className="input__taskTypeIcons">
            <TaskTypeIcons checked={checked} handleTaskType={handleTaskType} />
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
