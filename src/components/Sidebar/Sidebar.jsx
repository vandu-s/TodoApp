import { Avatar } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleIcon from "@mui/icons-material/Circle";
import { IconButton } from "@mui/material";
import { filterTodos, getTodos } from "../../features/slices/todoListSlice";
import { useDispatch } from "react-redux";
import "./style.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleFilterTodos = (filterType) => {
    dispatch(filterTodos(filterType));
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__userDetails">
        <Avatar>V</Avatar>
        <div>
          <p>TaskWave</p>
          <h3>Vandana Singandipe</h3>
        </div>
      </div>
      <div className="siderbar__divider"></div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu">
          <li className="sidebar__menuItem">
            <div>
              <IconButton></IconButton>
              <TaskIcon className="sidebar__menuIcon" />
              <span>Today tasks</span>
            </div>
            <ul className="sidebar__taskTypeContainer">
              <li
                className="sidebar__taskType"
                onClick={() => dispatch(getTodos())}
              >
                <CircleIcon className="circle all__task" />
                <span>All</span>
              </li>

              <li
                className="sidebar__taskType"
                onClick={() => handleFilterTodos("personal")}
              >
                <CircleIcon className="circle personal__task" />
                <span>Personal</span>
              </li>
              <li
                className="sidebar__taskType"
                onClick={() => handleFilterTodos("Freelance")}
              >
                <CircleIcon className="circle freelance__task" />
                <span>Freelance</span>
              </li>
              <li
                className="sidebar__taskType"
                onClick={() => handleFilterTodos("Work")}
              >
                <CircleIcon className="circle work__task" />
                <span>Work</span>
              </li>
            </ul>
          </li>
          <li className="sidebar__menuItem">
            <div>
              <AssignmentIcon className="sidebar__menuIcon disable" />
              <span> Schedule tasks</span>
            </div>
          </li>
          <li className="sidebar__menuItem">
            <div>
              <SettingsIcon className="sidebar__menuIcon disable" />
              <span> Settings</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
