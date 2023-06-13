/* eslint-disable react/prop-types */
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";

import "./style.scss";

const EditTodo = () => {
  return (
    <div className="todoEdit_center">
      <div className="todoEdit__container">
        <div className="todoEdit__contains">
          <input
            type="text"
            name="task"
            //  value={todo.task}
            // onChange={(e) => setTodo({ ...todo, task: e.target.value })}
            className="input__todo"
            placeholder="What is your next task?"
          />
          <div className="todoEdit__icons">
            <IconButton onClick={() => handleDeleteTodo(id)}>
              <Tooltip title="Save Task">
                <SaveIcon className="todoEdit__icon" />
              </Tooltip>
            </IconButton>
            <IconButton onClick={() => setIsEdit(id)}>
              <Tooltip title="Cancel">
                <CloseIcon className="todoEdit__icon" />
              </Tooltip>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
