import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import background0 from "../../Assets/bg1.svg";
import background1 from "../../Assets/bg2.svg";
import background2 from "../../Assets/bg3.svg";
import background3 from "../../Assets/bg4.svg";

const initialSubTextsAndSvg = {
  svg: background0,
  subtext1: "A simple platform designed to elevate your team's productivity.",
  subtext2:
    "With intuitive interface, creating workspaces and assigning tasks is easier than ever.",
};
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
          await sleep(3000);
          subtextAndSvg !== "" && setSubtextAndSvg(subtextAndSvg);
        }
      })().then(() => {
        setSubtextAndSvg(initialSubTextsAndSvg);
      });
  }, [subtextAndSvg]);

  return (
    <>
      <Grid item xs={12} md={4}>
        <img src={subtextAndSvg.svg} style={svgStyle} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ textAlign: "right", paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Typography color={"#abdaed"} variant="h2">
          {subtextAndSvg === initialSubTextsAndSvg ? (
            "Welcome to Workspace"
          ) : (
            <FormatQuoteIcon sx={{ fontSize: "50px" }} />
          )}
        </Typography>

        <Typography variant="h5" sx={{ marginTop: "10px" }}>
          {subtextAndSvg.subtext1}
        </Typography>
        <Typography variant="h5">{subtextAndSvg.subtext2}</Typography>
      </Grid>
    </>
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
