import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import "../styles/login.css";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Routes, Route } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [tabValue, setTabValue] = useState("student");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    console.log(newValue);
  };

  useEffect(() => {
    if (userInfo) {
      // if (userInfo.data.isInstructor === true) {
      //   history.push("/instructorHomePage");
      // } else
      navigate("/");
      console.log("LoggedIn");
      console.log(userInfo);
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   //dispatch
    //   dispatch(register(name, email, password));
    // }
    dispatch(login(user.email, user.password));
    console.log("Login dispatch");
  };
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { margin: "8px 0" };
  const font = { fontSize: 17 };
  return (
    <>
      <Grid>
        <Paper className="paper" elevation={10} style={paperStyle}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{ textDecorationColor: "#9d0000" }}
              // textColor="secondary"
              // indicatorColor="secondary"
              centered
            >
              <Tab value="student" label="Student" />
              <Tab value="employer" label="Employer" />
            </Tabs>
          </Box>
          {/* <div className="close">
            <Button>
              <CloseIcon />
            </Button>
          </div> */}
          <Grid>
            <div className="container">
              {/* <div className="user-menu">
                <div id="student">
                  <Link className="u-line" to="/login/StudentLog">
                    Student
                  </Link>
                </div>
                <div id="Employee">
                  <Link className="u-line" to="/login/CompanyLog">
                    Employer/T&P
                  </Link>
                </div>
              </div> */}
              {tabValue == "student" ? (
                <>
                  <a className="g-login" to="www.google.com">
                    <div id="g-login">
                      <div className="g-img">
                        <GoogleIcon />
                      </div>
                      <div className="g-content">Login with Google</div>
                    </div>
                  </a>
                  <div className="seprate">
                    <div className="text">
                      <p>OR</p>
                    </div>
                    <div className="border"></div>
                  </div>
                </>
              ) : (
                ""
              )}

              <form
                style={{ marginTop: "10px" }}
                noValidate
                onSubmit={submitHandler}
              >
                <Grid>
                  <TextField
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    placeholder="@example.com"
                    fullWidth
                    required
                  ></TextField>
                  <TextField
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    sx={{ mt: 2 }}
                    placeholder="Enter Password"
                    type="password"
                    fullWidth
                    required
                  ></TextField>
                  <Typography style={btstyle} sx={{ color: "#9d0000" }}>
                    <Link
                      to="#"
                      sx={{ textDecoration: "none", color: "#9d0000" }}
                    >
                      Forgot Password
                    </Link>
                  </Typography>
                </Grid>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btstyle}
                  sx={{ background: "#9d0000" }}
                  fullWidth
                >
                  Login
                </Button>
              </form>
              <Grid>
                <Typography style={font}>
                  New to Internshala?{" "}
                  <Link
                    to="/signup"
                    sx={{ textDecoration: "none", Color: "#9d0000" }}
                  >
                    Register
                  </Link>
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
