import { useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import { addTodo } from "../../features/slices/todoSlice";
import { useDispatch } from "react-redux";
import "./style.scss";

const TodoInputField = () => {
  const dispatch = useDispatch();

  const initialState = {
    id: new Date().getTime().toString(),
    task: "",
    time: "",
    date: "",
    isCompleted: false,
    taskType: "",
  };
  const [todo, setTodo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
  };

  return (
    <div className="input__container">
      <form onSubmit={handleSubmit}>
        <div className="input__todoContainer">
          <div className="input__taskTypeIcons">
            <div className="circle personal__task"></div>
            <div className="circle freelance__task"></div>
            <div className="circle work__task"></div>
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
