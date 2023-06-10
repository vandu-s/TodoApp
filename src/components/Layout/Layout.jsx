import Sidebar from "../Sidebar/Sidebar";
import "./style.scss";
import { Grid } from "@mui/material";
import Main from "../Main/Main";
const Layout = () => {
  return (
    <>
      <Grid container className="layout__center">
        <Grid item className="layout__container">
          <div className="layout__skyCircle"></div>
          <Sidebar />
          <Main />
          <div className="layout__yellowCircle"></div>
          <div className="layout__peachCircle"></div>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
