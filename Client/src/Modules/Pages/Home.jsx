import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import logo from "../Assets/logo.svg";
import backGround from "../Assets/bg1.svg";

function Home() {
  const navigate = useNavigate();
  // useEffect(()=>{navigate('/logIn')})
  return (
    <>
      <nav style={navBarStyle}>
        <div style={logoAndNameContaier}>
          <img style={logoStyle} src={logo} alt="" />
          <Typography color={"#abdaed"} variant="h6">
            Workspace
          </Typography>
        </div>
        <div>
          <Button style={buttonStyle} onClick={() => navigate("/logIn")}>
            Log In
          </Button>
          <Button style={buttonStyle} onClick={() => navigate("/signUp")}>
            Sign Up
          </Button>
        </div>
      </nav>
      <div style={backgroundDiv}>
        <div style={contentBody}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <img src={backGround} style={backgroundStyle} alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ textAlign: "right", paddingRight: "5%", paddingLeft: "5%" }}
            >
              <Typography color={"#abdaed"} variant="h2">
                Welcome to Workspace
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                A simple platform designed to elevate your team's productivity.
              </Typography>
              <Typography variant="h5">
                With intuitive interface, creating workspaces and assigning
                tasks is easier than ever.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Home;

const contentBody = {
  position: "fixed",
  top: "10%",
  display: "flex",
  alignItems: "center",
  bottom: 0,
  left: 0,
  right: 0,
};

const backgroundStyle = {
  width: "110%",
  height: "110%",
  marginTop: "-10%",
};

const logoAndNameContaier = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const logoStyle = {
  height: "50px",
  width: "50px",
  marginRight: "5px",
};

const backgroundDiv = {
  backgroundColor: "rgb(55, 55, 114)",
  color: "white",
  border: "none",
  borderTopLeftRadius: "90%",
  paddingLeft: "2%",
  paddingRight: "2%",
  position: "absolute",
  bottom: 0,
  right: 0,
  height: "90%",
  width: "70%",
};

const headingStyle = {
  fontSize: "30px",
  marginLeft: "10%",
  marginRight: "10%",
  padding: 0,
  cursor: "pointer",
};

const navBarStyle = {
  backgroundColor: "rgb(55, 55, 114)",
  color: "white",
  border: "none",
  borderBottomRightRadius: "30px",
  paddingLeft: "2%",
  paddingRight: "2%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  width: "90%",
};

const buttonStyle = {
  color: "#abdaed",
};
