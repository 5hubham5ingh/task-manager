import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Grid, Typography } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import background0 from "../../Assets/bg1.svg";
import background1 from "../../Assets/bg2.svg";
import background2 from "../../Assets/bg3.svg";
import background3 from "../../Assets/bg4.svg";
import "../../Styles/HomePageBody.css";

const subtextsAndSvgs = [
  {
    index: 0,
    svg: background0,
    subtext1: "A simple platform designed to elevate your team's productivity.",
    subtext2:
      "With intuitive interface, creating workspaces and assigning tasks is easier than ever.",
  },
  {
    index: 1,
    svg: background1,
    subtext1: "Minimalistic approach focusing on what truly matters",
    subtext2: "- getting tasks done efficiently.",
  },
  {
    index: 2,
    svg: background2,
    subtext1: "Create dedicated workspaces for different projects,",
    subtext2: "assign tasks, set deadlines, and watch your team thrive.",
  },
  {
    index: 3,
    svg: background3,
    subtext1:
      "Easily mark tasks as complete, keeping everyone on the same page.",
    subtext2: "Ensuring nothing falls through the cracks.",
  },
];
export default function GenerateSubtextAndSvg() {
  const [subtextAndSvg, setSubtextAndSvg] = useState(subtextsAndSvgs[0]);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  useEffect(() => {
    item1Ref.current.classList.add("fadeInAnimation");
    item2Ref.current.classList.add("fadeInAnimation");

    wait(10000).then(() => {
      const nextIndex =
        subtextAndSvg.index + 1 > subtextsAndSvgs.length - 1
          ? 0
          : subtextAndSvg.index + 1;
      setSubtextAndSvg(subtextsAndSvgs[nextIndex]);

      item1Ref.current.classList.remove("fadeInAnimation");
      item2Ref.current.classList.remove("fadeInAnimation");
    });
  });

  return (
    <Fragment>
      <Grid ref={item1Ref} item xs={12} md={4}>
        <img src={subtextAndSvg.svg} style={svgStyle} alt="" />
      </Grid>
      <Grid
        ref={item2Ref}
        item
        xs={12}
        md={8}
        sx={{ textAlign: "right", paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Typography color={"#abdaed"} variant="h2">
          {subtextAndSvg.index === 0 ? (
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
    </Fragment>
  );
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const svgStyle = {
  width: "110%",
  height: "110%",
  marginTop: "-10%",
};
