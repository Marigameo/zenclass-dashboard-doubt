import "./Navigationbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { FaSearch } from "react-icons/fa";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  Container,
  Row,
} from "react-bootstrap";

const useStyles = makeStyles({
  iconButton: {
    fontSize: "20px",
    color: "#cecece",
    transform: "scale(0.7)",

    "&:hover, &:focus": {
      color: "grey",
      backgroundColor: "transparent",
    },
  },
  listItemIconText: {
    transform: "scale(0.8)",
  },
});

export function Navigationbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  console.log("ismenuopen", isMenuOpen);

  const handleProfileMenuOpen = (event) => {
    console.log("event", event);
    console.log("current target", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    alert("Ready to leave ?");
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon className={classes.listItemIconText}>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText className={classes.listItemIconText}>
          Profile
        </ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon className={classes.listItemIconText}>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText className={classes.listItemIconText}>
          Settings
        </ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon className={classes.listItemIconText}>
          <ListIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText className={classes.listItemIconText}>
          Activity Log
        </ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon className={classes.listItemIconText}>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText className={classes.listItemIconText}>LogOut</ListItemText>
      </MenuItem>
    </Menu>
  );
  const styles1 = {
    background: "whitesmoke",
    width: "auto",
  };
  const stylesInputDiv = {
    width: "30%",
    height: "30px",
    backgroundColor: "#f5f5f5",
  };
  const stylesInput = {
    fontSize: "10px",
    height: "inherit",
  };
  const stylesButton = {
    fontSize: "12px",
    height: "inherit",
    display: "flex",
    alignItems: "center",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={styles1}>
        <Toolbar>
          <InputGroup style={stylesInputDiv}>
            <FormControl
              placeholder="Search for..."
              aria-label="Search for with one button"
              style={stylesInput}
            />

            <Button variant="primary" style={stylesButton}>
              <FaSearch />
            </Button>
          </InputGroup>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", flexDirection: "row",overflow: "hidden"}}>
            <IconButton
              size=""
              aria-label="show 17 new notifications"
              color="inherit"
              className={classes.iconButton}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className={classes.iconButton}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconButton}
            >
              Shyamini
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
