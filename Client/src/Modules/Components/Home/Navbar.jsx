import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { userActions } from "../../Features/User/userSlice";
import { useDispatch } from "react-redux";
import { useUser } from "../../Features/User/userSelectors";
import {navBarStyle, logoAndNameContaier, logoStyle, buttonStyle} from '../../Styles/Home/navbar'

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


