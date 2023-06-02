import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
          marginRight: "4rem",
          color: "white",
          fontSize: "1rem",
        }}
      >
        <Link
          to="/#"
          style={{ color: "white", marginRight: "3rem", fontSize: "1.2rem" }}
        >
          {/* <Typography>All</Typography> */}
        </Link>
        <Link to="/#" style={{ color: "white", fontSize: "1.2rem" }}>
          {/* <Typography>New</Typography> */}
        </Link>
      </div>

      <Grid item style={{ display: "flex", marginTop: "2rem" }}>
        {/* <Link to="/dashboard"> */}
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            {" "}
            <h2 style={{ color: "white" }}>Card 1</h2>
          </CardContent>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            {" "}
            <h2 style={{ color: "white" }}>Card 2</h2>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <h2 style={{ color: "white" }}>Card 3</h2>
          </CardContent>
        </Card>
        {/* </Link> */}

        {/* <Menu // added Menu component for the dropdown
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Ppt</MenuItem>
          <MenuItem onClick={handleClose}>Video</MenuItem>
          <MenuItem onClick={handleClose}>HTML</MenuItem>
        </Menu> */}
      </Grid>
    </Grid>
  );
}

export default Home;
