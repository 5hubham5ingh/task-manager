import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Grid, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import background0 from "../../Assets/bg1.svg";
import background1 from "../../Assets/bg2.svg";
import background2 from "../../Assets/bg3.svg";
import background3 from "../../Assets/bg4.svg";
import "../../Styles/HomePageBody.css";

const initialSubTextsAndSvg = {data:{
  svg: background0,
  subtext1: "A simple platform designed to elevate your team's productivity.",
  subtext2:
    "With intuitive interface, creating workspaces and assigning tasks is easier than ever.",
}, visibility:false};
const subtextsAndSvgs = [
  {
    svg: background1,
    subtext1: "Minimalistic approach focusing on what truly matters",
    subtext2: "- getting tasks done efficiently.",
  },
  {
    svg: background2,
    subtext1: "Create dedicated workspaces for different projects,",
    subtext2: "assign tasks, set deadlines, and watch your team thrive.",
  },
  {
    svg: background3,
    subtext1:
      "Easily mark tasks as complete, keeping everyone on the same page.",
    subtext2: "Ensuring nothing falls through the cracks.",
  },
  "",
];
export default function GenerateSubtextAndSvg() {
  const [subtextAndSvg, setSubtextAndSvg] = useState(initialSubTextsAndSvg);
  useEffect(() => {
    if (subtextAndSvg === initialSubTextsAndSvg)
      (async () => {
        for (const subtextAndSvg of subtextsAndSvgs) {
          await sleep(4000);
          subtextAndSvg !== "" && setSubtextAndSvg({data:subtextAndSvg,visibility:false});
        }
      })().then(() => {
        setSubtextAndSvg(initialSubTextsAndSvg);
      });
  }, [subtextAndSvg]);
  useEffect(() => setSubtextAndSvg(prevState => ({...prevState, visibility:true})), [subtextAndSvg]);
  return AnimatedBody(subtextAndSvg, initialSubTextsAndSvg);
}

function AnimatedBody(subtextAndSvg, initialSubTextsAndSvg) {

  return (
    <Fragment>
      <Grid
        className={`fade-in-from-right ${subtextAndSvg.visibility ? "active" : ""}`}
        item
        xs={12}
        md={4}
      >
        <img src={subtextAndSvg.data.svg} style={svgStyle} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        className={`fade-in-from-right ${subtextAndSvg.visibility ? "active" : ""}`}
        sx={{ textAlign: "right", paddingRight: "5%", paddingLeft: "5%" }}
      >
        {subtextAndSvg === initialSubTextsAndSvg ? (
          <Typography color={"#abdaed"} variant="h2">
            Welcome to Workspace
          </Typography>
        ) : (
          <FormatQuoteIcon sx={{ fontSize: "50px" }} />
        )}

        <Typography variant="h5" sx={{ marginTop: "10px" }}>
          {subtextAndSvg.data.subtext1}
        </Typography>
        <Typography variant="h5">{subtextAndSvg.data.subtext2}</Typography>
      </Grid>
    </Fragment>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const svgStyle = {
  width: "110%",
  height: "110%",
  marginTop: "-10%",
};
