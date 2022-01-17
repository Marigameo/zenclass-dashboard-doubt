import "./App.css";
// import Box from "@mui/material/Box";
// import { Route, Switch } from "react-router-dom";
import { Sidebar } from "./Sidebar/sideBarcomponents";

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
