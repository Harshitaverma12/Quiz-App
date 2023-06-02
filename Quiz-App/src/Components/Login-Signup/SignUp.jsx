import React from "react";
import { Grid, Link, TextField, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import loginimg from "../../assets/g8.png";
import logo from "../../assets/line-art-house-roof-and-buildings-4485ld-removebg-preview.jpg";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

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
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginInputDiv">
        <Typography variant="h4" className="loginWelText">
          Welcome!
        </Typography>
        <Grid className="loginInputText">
          <Typography variant="h6" className="loginAcc">
            Create new account
          </Typography>
          <Link className="loginSignUp" href="http://localhost:3000/login">
            Sign In
          </Link>
        </Grid>

        <Grid className="loginInputBox">
          <TextField id="email" label="Email" className="loginInput1" />
          <TextField id="username" label="User Name" className="signupInput2" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className="signupInput2"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            className="signupInput2"
          />
        </Grid>

        <Button
          variant="outlined"
          className="loginButton"
          onClick={handleClick}
        >
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginImageDiv">
        <img src={logo} alt="logo" className="loginLogo" />
        <img className="loginImage" src={loginimg} alt="image" />
        <Typography variant="h6" className="loginText"></Typography>
      </Grid>
    </Grid>
  );
};

export default SignUp;
