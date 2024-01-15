import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { userActions } from "../../Features/User/userSlice";
import { useDispatch } from "react-redux";
import { useUser } from "../../Features/User/userSelectors";

export default function Navbar() {
  const navigate = useNavigate();
  const user =  useUser();
  const dispatch = useDispatch();
  const userButtons = [
    {
      name: "Workspaces",
      action: () => navigate("/workspaces"),
    },
    {
      name: "Log out",
      action: () => dispatch(userActions.logOut()),
    },
  ];
  const guestButtons = [
    {
      name: "Log in",
      action: () => navigate("/logIn"),
    },
    {
      name: "Sign up",
      action: () => navigate("/signUp"),
    },
  ];
console.log('user',user)
  return (
    <nav style={navBarStyle}>
      <div style={logoAndNameContaier}>
        <img style={logoStyle} src={logo} alt="" />
        <Typography color={"#abdaed"} variant="h6">
          Workspace
        </Typography>
      </div>
      <div>
        {user
          ? userButtons.map((button) => (
              <Button style={buttonStyle} key={button.name} onClick={button.action}>
                {button.name}
              </Button>
            ))
          : guestButtons.map((button) => 
              <Button style={buttonStyle} key={button.name} onClick={button.action}>
                {button.name}
              </Button>
            )}
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
