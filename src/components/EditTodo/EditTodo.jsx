/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";
import { updateTodo } from "../../features/slices/todoListSlice";
import { useDispatch } from "react-redux";
import TaskTypeIcons from "../TaskTypeIcons/TaskTypeIcons";
import catergory from "../../util/appUtil";

import "./style.scss";

const EditTodo = ({ id, task, setIsEdit }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(task);
  const [checked, setChecked] = useState(catergory.PERSONAL);
  const inputRef = useRef(null);

  const handleTaskType = (type) => {
    setChecked(type);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEditTodo = (id) => {
    const updatedTodo = {
      id: id,
      task: newTask,
      taskType: checked,
    };
    dispatch(updateTodo(updatedTodo));
    setIsEdit(false);
  };
  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <div className="todoEdit__container">
      <form onSubmit={() => handleEditTodo(id)}>
        <div className="todoEdit__contains">
          <TaskTypeIcons checked={checked} handleTaskType={handleTaskType} />
          <input
            type="text"
            name="task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="todoEdit__input"
            placeholder="What is your next task?"
            ref={inputRef}
          />
          <div className="todoEdit__icons">
            <IconButton type="submit">
              <Tooltip title="Save Task">
                <SaveIcon className="todoEdit__icon" />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Cancel" onClick={handleCancel}>
                <CloseIcon className="todoEdit__icon" />
              </Tooltip>
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
