import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  // useEffect(()=>{navigate('/logIn')})
  return (
    <>
      <nav style={navBarStyle}>
        <Typography variant="h6">Workspace</Typography>
        <div>
          <Button onClick={() => navigate("/logIn")}>Log In</Button>
          <Button onClick={() => navigate("/signUp")}>Sign Up</Button>
        </div>
      </nav>
      <div style={contentStyle}></div>
      <Grid>
        <Grid ></Grid>
      </Grid>
    </>
  );
}

export default Home;

const contentStyle = {
  backgroundColor: "rgb(55, 55, 114)",
  color: "white",
  border: "none",
  borderTopLeftRadius: "90%",
  paddingLeft: "2%",
  paddingRight: "2%",
  position: "fixed",
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
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  width: "90%",
};

const buttonStyle = {
  backgroundColor: "white",
  color: "blue",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
};
