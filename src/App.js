import "./App.css";
// import Box from "@mui/material/Box";
// import { Route, Switch } from "react-router-dom";
import { Sidebar } from "./Sidebar/sideBarcomponents";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Sidebar />
    </div>
  );
}

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "red",
  },
});
function Navigationbar() {
  const classes = useStyles();
  const styles = { backgroundColor: "whitesmoke", zIndex: 1 };
  return (
    <AppBar style={styles} className={classes.appbar}>
      <Toolbar>
        <Typography></Typography>
      </Toolbar>
    </AppBar>
  );
}
export default App;
