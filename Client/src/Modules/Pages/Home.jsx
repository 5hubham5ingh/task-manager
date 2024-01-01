import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import backGround0 from "../Assets/bg1.svg";
import Navbar from "../Components/HomePage/Navbar";

const GenerateSubtext = () => {
  const [subText, setSubtext] = useState([
    " A simple platform designed to elevate your team's productivity.",
    " With intuitive interface, creating workspaces and assigning tasks is easier than ever.",
  ]);

  const subTexts = [
    [
      "Minimalistic approach focusing on what truly matters",
      "- getting tasks done efficiently.",
    ],
    [
      "Create dedicated workspaces for different projects, assign tasks, set deadlines,",
      "and watch your team thrive.",
    ],
    [
      "Easily mark tasks as complete, keeping everyone on the same page.",
      "Ensuring nothing falls through the cracks.",
    ],
  ];

  useEffect(() => {
    subTexts.map(
      async (subText) => await sleep(3000).then((x) => setSubtext(subText))
    );
  },[]);

  return (
    <>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        {subText[0]}
      </Typography>
      <Typography variant="h5">{subText[1]}</Typography>
    </>
  );
};

const GenerateSvg = () => {

  const svgs = ['background0','background1','background2','background3']
  const [svg,setSvg] = useState();

  useEffect(()=>{svgs.map(async svg => sleep(3000).then(x => setSvg(svg)))},[])

  return <img src={svg} style={backgroundStyle} alt="" />
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={backgroundDiv}>
        <div style={contentBody}>
          <Grid container>
            <Grid item xs={12} md={4}>
              {GenerateSvg()}
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
              {GenerateSubtext()}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
