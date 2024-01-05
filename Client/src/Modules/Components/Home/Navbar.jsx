import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
export default function Navbar() {
  const navigate = useNavigate();

  return (
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
  );
}


  
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