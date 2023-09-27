import { SET_Theme_Button, useTheme } from "./Theme/Theme";

export const BackGround = ({children,itemAlignment})=> {
    const {theme}=useTheme();
      return <div style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        backgroundImage: `linear-gradient(${theme},rgb(55, 55, 114))`,
        justifyContent: "center",
        alignItems:itemAlignment,
        overflow:'auto',
      }}><SET_Theme_Button />{children}</div>
    }