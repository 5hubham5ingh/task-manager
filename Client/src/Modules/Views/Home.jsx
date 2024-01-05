import { Grid } from "@mui/material";
import Navbar from "../Components/Home/Navbar";
import GenerateSubtextAndSvg from "../Components/Home/Body";
import Footer from "../Components/Home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={backgroundDiv}>
        <div style={contentBody}>
          <Grid container>
            <GenerateSubtextAndSvg />
          </Grid>
        </div>
        <Footer/>
      </div>
    </>
  );
}

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
const contentBody = {
  position: "fixed",
  top: "10%",
  display: "flex",
  alignItems: "center",
  bottom: 0,
  left: 0,
  right: 0,
};
