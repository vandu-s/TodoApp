/* eslint-disable react/prop-types */
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton, Tooltip } from "@mui/material";

const ReadTodo = ({
  id,
  task,
  isCompleted,
  taskType,
  handleTaskComplete,
  handleDeleteTodo,
  setIsEdit,
}) => {
  return (
    <>
      {" "}
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
            <IconButton onClick={() => setIsEdit(true)}>
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
    </>
  );
};

export default ReadTodo;
