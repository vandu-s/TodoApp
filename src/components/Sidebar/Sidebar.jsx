/* eslint-disable no-unused-vars */
import { Avatar } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import "./style.scss";

const Sidebar = () => {
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
              <TaskIcon className="sidebar__menuIcon" />
              <span>Today tasks</span>
            </div>
            <ul className="sidebar__taskTypeContainer">
              <li className="sidebar__taskType">
                <div className="circle personal__task"></div>
                <span>Personal</span>
              </li>
              <li className="sidebar__taskType">
                <div className="circle freelance__task"></div>
                <span>Freelace</span>
              </li>
              <li className="sidebar__taskType">
                <div className="circle work__task"></div>
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
