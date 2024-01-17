import { SetThemeButton, useTheme } from "../Theme/Theme";
import { Outlet } from "react-router-dom";
export const BackGround = ({ children, itemAlignment }) => {
  const { theme } = useTheme();
  return <div style={{
    height: "100vh",
    width: "100vw",
    position: "fixed",
    display: "flex",
    backgroundImage: `linear-gradient(${theme},rgb(55, 55, 114))`,
    justifyContent: "center",
    alignItems: itemAlignment,
    overflow: 'auto',
  }}>
    <SetThemeButton />
    {children}
    <Outlet />
  </div>
}