import { Outlet } from "react-router-dom";
import "./Styles/Root.css";
import { SET_Theme_Button, useTheme } from "./Component/Theme/Theme";

function Root() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        ...rootStyle,
        backgroundImage: `linear-gradient(${theme},rgb(55, 55, 114))`,
      }}
    >
      <SET_Theme_Button />
      <Outlet />
    </div>
  );
}

export default Root;

const rootStyle = {
  height: "100vh",
  width: "100vw",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
