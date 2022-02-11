import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  // Box,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  // Container,
  // Theme,
} from "@mui/material";
// import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// import { makeStyles, ThemeProvider } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();

  let navigate = useNavigate();

  //   useEffect(() => {
  // if (userInfo) {
  //   history.push("/");
  // }
  //   }, [userInfo]);

  const handleLogout = () => {
    if (userInfo) {
      navigate("/");
      dispatch(logout());
    }
  };
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List
          disablePadding
          sx={{ width: "250px" }}
          onClick={() => setOpen(false)}
        >
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/profile">
            <ListItemText primary="Profile"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/contact">
            <ListItemText primary="Contact Us"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="About Us"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/resume">
            <ListItemText primary="Resume"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/allInternships">
            <ListItemText primary="All Internships"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/login/MyApplicationCard">
            <ListItemText primary="My Application"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Employee/Dashboard">
            <ListItemText primary="Employee Dashboard"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Employee/Internship">
            <ListItemText primary="Employee Internships"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/particularInternship">
            <ListItemText primary="Particular Internship"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/questions">
            <ListItemText primary="Questions"></ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ flexGrow: 1, textDecoration: "none" }}
            color="inherit"
            component={Link}
            to="/"
          >
            XcitEducation
          </Typography>
          {/* <div className={classes.sectionDesktop}> */}
          <div>
            {userInfo ? (
              <>
                <div style={{ display: "flex" }}>
                  <p style={{ marginTop: "10px" }}> Welcome, </p>
                  <h1 style={{ marginLeft: "5px" }}>{userInfo.data.name}</h1>

                  {userInfo.data.isEmployer == true ? (
                    <Button
                      variant="contained"
                      sx={{ mr: 2, ml: 2 }}
                      color="inherit"
                      style={{ backgroundColor: "#5996ff" }}
                      component={Link}
                      to="/createInternship"
                    >
                      Post Internship
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button
                    variant="contained"
                    sx={{ mr: 2, ml: 2 }}
                    color="inherit"
                    style={{ backgroundColor: "red" }}
                    endIcon={<LoginIcon fontSize="small" />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  // color="warning"
                  sx={{ mr: 2 }}
                  color="inherit"
                  style={{ backgroundColor: "#5996ff" }}
                  endIcon={<LoginIcon fontSize="small" />}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <>
                      <Link to="/signup" style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          // color="success"
                          // color="inherit"
                          style={{ color: "white", backgroundColor: "#23b502" }}
                          // {...bindTrigger(popupState)}
                          // endIcon={<ArrowDropDownOutlinedIcon fontSize="small" />

                          // }
                        >
                          Register
                        </Button>
                      </Link>
                      {/* <Menu {...bindMenu(popupState)}>
                        <MenuItem
                          onClick={popupState.close}
                          component={Link}
                          to="/signup"
                        >
                          Student
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          component={Link}
                          to="/register/Company"
                        >
                          Company
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          component={Link}
                          to="/login/MyApplicationCard"
                        >
                          My Application
                        </MenuItem>
                      </Menu> */}
                    </>
                  )}
                </PopupState>
              </>
            )}
            {/* <Button
              variant="outlined"
              sx={{ mr: 2 }}
              color="inherit"
              endIcon={<LoginIcon fontSize="small" />}
              component={Link}
              to="/login"
            >
              Login
            </Button>*/}
            {/* <Button variant="contained" color="error" {...bindTrigger(popupState)} component={Link} to="/register" endIcon={<ArrowDropDownOutlinedIcon fontSize="small"/>}>Register</Button> */}
            {/*   <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button
                    variant="outlined"
                    color="inherit"
                    {...bindTrigger(popupState)}
                    endIcon={<ArrowDropDownOutlinedIcon fontSize="small" />}
                  >
                    Register
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={popupState.close}
                      component={Link}
                      to="/register/Student"
                    >
                      Student
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      component={Link}
                      to="/register/Company"
                    >
                      Company
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      component={Link}
                      to="/login/MyApplicationCard"
                    >
                      My Application
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState> */}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
