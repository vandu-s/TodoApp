/* eslint-disable react/prop-types */
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import Tooltip from "@mui/material/Tooltip";
import catergory from "../../util/appUtil";

const TaskTypeIcons = ({ checked, handleTaskType }) => {
  return (
    <>
      {checked === catergory.PERSONAL ? (
        <Tooltip title="Personal">
          <CheckCircleIcon className="checked__circleIcon personal__task" />
        </Tooltip>
      ) : (
        <Tooltip title="Personal">
          <CircleIcon
            className="circle personal__task"
            onClick={() => handleTaskType(catergory.PERSONAL)}
          />
        </Tooltip>
      )}
      {checked === catergory.FREELANCE ? (
        <Tooltip title="Freelance">
          <CheckCircleIcon className="checked__circleIcon freelance__task" />
        </Tooltip>
      ) : (
        <Tooltip title="Freelance">
          <CircleIcon
            className="circle freelance__task"
            onClick={() => handleTaskType(catergory.FREELANCE)}
          />
        </Tooltip>
      )}

      {checked === catergory.WORK ? (
        <Tooltip title="Work">
          <CheckCircleIcon className="checked__circleIcon work__task" />
        </Tooltip>
      ) : (
        <Tooltip title="Work">
          <CircleIcon
            className="circle work__task"
            onClick={() => handleTaskType(catergory.WORK)}
          />
        </Tooltip>
      )}
    </>
  );
};

export default TaskTypeIcons;
