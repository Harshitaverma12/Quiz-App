import React, { useState } from "react";
import { Checkbox, Grid, Link, TextField, Typography } from "@mui/material";
import "../../App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import loginimg from "../../assets/g8.png";
import logo from "../../assets/line-art-house-roof-and-buildings-4485ld-removebg-preview.jpg";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutTime, setLogoutTime] = useState(0);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    const currentTime = new Date().getTime();
    const logoutTime = currentTime + 10 * 60 * 1000; // 10 minutes
    setLogoutTime(logoutTime);

    // Perform login logic
    // Assuming login is successful
    const token = "example_token"; // Replace with your token
    // Store token in localStorage
    localStorage.setItem("token", token);
    startTimer();
  };

  const updateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const remainingTime = logoutTime - currentTime;

    if (remainingTime <= 0) {
      setIsLoggedIn(false);
      setLogoutTime(0);
    }
  };

  const startTimer = () => {
    setInterval(updateRemainingTime, 1000);
  };

  function handleClick() {
    navigate("/SidebarDashboard");
  }

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={8}
      xl={8}
      spacing={0}
      className="loginCard"
    >
      {/*image block*/}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginImageDiv">
        {/*logo*/}
        <img className="loginLogo" src={logo} alt="logo" />
        {/*iamge*/}
        <img className="loginImage" src={loginimg} alt="image" />
        {/*text*/}
        <Typography variant="h6" className="loginText"></Typography>
        {/*details block*/}
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginInputDiv">
        {/*text*/}
        <Typography variant="h4" className="loginWelText">
          Welcome!
        </Typography>
        <Grid className="loginInputText">
          <Typography variant="h6" className="loginAcc">
            Don't have an account yet?
          </Typography>
          <Link className="loginSignUp" href="http://localhost:3000/signup">
            Sign Up
          </Link>
        </Grid>
        {isLoggedIn && (
          <div className="headerTimer">
            <Typography variant="body2">
              Time remaining:{" "}
              {Math.floor((logoutTime - new Date().getTime()) / 1000)} seconds
            </Typography>
          </div>
        )}
        {/*inputs*/}
        <Grid className="loginInputBox">
          <TextField id="username" label="User Name" className="loginInput1" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            className="loginInput2"
            autoComplete="current-password"
          />
        </Grid>

        <Grid className="loginCheckStatus">
          <Grid className="loginCheckBox">
            <Checkbox size="small" className="loginCheckboxStyle" />
            <p className="loginLogText">Keep me logged in</p>
          </Grid>
          <Link className="loginForgetText" href="#">
            Forgot Password
          </Link>
        </Grid>

        {/*button for login*/}
        <Button
          variant="outlined"
          className="loginButton"
          onClick={() => {
            handleClick();
            handleLogin();
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
