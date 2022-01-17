import "./App.css";
// import Box from "@mui/material/Box";
// import { Route, Switch } from "react-router-dom";
import { Sidebar } from "./Sidebar/sideBarcomponents";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
import { OtherComponent } from "./OtherComponent/OtherComponent";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <OtherComponent />
    </div>
  );
}

export default App;
