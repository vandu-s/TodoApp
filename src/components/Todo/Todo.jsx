import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./style.scss";
const Todo = (todo) => {
  return (
    <div className="todo_center">
      <div className="todo__container">
        <div className="todo__contains">
          <div className="circle personal__task"></div>
          <p className="todo__value">{todo.task}</p>
          <p>8:00PM</p>
          <div className="todo__icons">
            <CheckCircleIcon className="todo__icon" />
            {/* <RadioButtonUncheckedIcon className="disable" /> */}
            <EditIcon className="todo__icon" />
            <DeleteIcon className="todo__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
