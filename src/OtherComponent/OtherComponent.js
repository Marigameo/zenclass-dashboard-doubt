import { Navigationbar } from "./NavBar/Navigationbar";
import { Dashboardcomponent1 } from "../Sidebar/sideBarcomponents";

export function OtherComponent() {
  // const [aw, setw] = useState(`calc(100% - 90px)`);
  const styles = {  width:'100%', overflow: "hidden" };
  return (
    <div className="second-Container" style={styles}>
      <Navigationbar />
      <Dashboardcomponent1 />
    </div>
  );
}
