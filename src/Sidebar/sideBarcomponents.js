import "./Sidebar.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useState } from "react";
import { Link } from "react-router-dom";

const sideBarcomponents = [
  {
    title: "Components",
    icon: <SettingsIcon />,
    link: "/components",
    arrow: <ArrowForwardIosIcon />,
    subheading: "INTERFACE",
  },
  {
    title: "Utilities",
    icon: <BuildIcon />,
    link: "/utilties",
    arrow: <ArrowForwardIosIcon />,
    subheading: "",
  },
  {
    title: "Pages",
    icon: <FolderIcon n />,
    link: "/pages",
    arrow: <ArrowForwardIosIcon />,
    subheading: "ADDONS",
  },
  {
    title: "Charts",
    icon: <BarChartIcon />,
    link: "/charts",
    arrow: "",
    line: "<div class='line'></div>",
    subheading: "",
  },
  {
    title: "Tables",
    icon: <TableChartIcon />,
    link: "/tables",
    arrow: "",
    subheading: "",
  },
];
function SidemenuOptions({ ptitle, picon, parrow, plink, pline, psubheading }) {
  console.log(sideBarcomponents);
  return (
    <div className="sidebar-menu">
      <div
        style={{
          fontSize: "8px",
          color: "#9f9fb4",
          fontWeight: "bold",
          paddingTop: "12px",
        }}
      >
        {psubheading}
      </div>

      <div className="sidebar-submenu">
        <div className="sidebar-submenu1">
          <Link to="{plink}">
            <IconButton style={{ color: "#9f9fb4", transform: "scale(0.6)" }}>
              {picon}
            </IconButton>

            <IconButton
              style={{
                color: "white",
                fontSize: "10px",
                fontWeight: "bold",
                padding: "0px",
              }}
            >
              {ptitle}
            </IconButton>
          </Link>
        </div>

        <div className="arrow">
          <IconButton style={{ color: "#9f9fb4", transform: "scale(0.4)" }}>{parrow}</IconButton>
        </div>
      </div>
    </div> //end of sidebar menu
  );
}
export function Sidebar() {
  const [setWidth, setWidthSidebar] = useState(180);
  const styles = { width: setWidth };
  return (
    <div className="sidebar" style={styles}>
      <div style={{ marginLeft: "12px" }}>
        <div className="sidebar-emoji">
          <div className="arrow">
            <EmojiEmotionsIcon style={{ color: "white", fontSize: "30px" }} />
          </div>
          <div
            className="arrow"
            style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}
          >
            <p>
              SB ADMIN <sup>2</sup>
            </p>
          </div>
        </div>
        <div class="line"></div>
        <div className="sidebar-submenu1">
          <Link to="/dashboard">
            <IconButton style={{ color: "white", transform: "scale(0.6)" }}>
              <SpeedIcon />
            </IconButton>

            <IconButton
              style={{
                color: "white",
                fontSize: "10px",
                fontWeight: "bold",
                padding: "0px",
              }}
            >
              Dashboard
            </IconButton>
          </Link>
        </div>
        <div className="line"></div>
        <ul className="sidebarList">
          <li className="sidebarList-row">
            {sideBarcomponents.map((m) => (
              <SidemenuOptions
                ptitle={m.title}
                picon={m.icon}
                parrow={m.arrow}
                plink={m.link}
                pline={m.line}
                psubheading={m.subheading} />
            ))}
          </li>
        </ul>
        <div class="line"></div>
        <div className="navigating-arrow">
          <IconButton
            onClick={() => {
              console.log(setWidth);
              setWidth === 90 ? setWidthSidebar(180) : setWidthSidebar(90);
            }}
          >
            {setWidth === 180 ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
