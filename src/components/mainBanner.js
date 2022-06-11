import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import bannerImag from "../static/ban1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    backgroundImage:
      "linear-gradient(180deg, rgba(46, 157, 255, 0.5), rgba(46, 157, 255, 0.22)), url(../ban2.jpg)",
    backgroundPosition: "0% 0%, 50% 50%",
    backgroundSize: "auto, cover",

    borderBottom: "4px solid #69b9ff",
    "&::before": {
      content: "",
      backgroundImage: `url(${bannerImag})`,
      backgroundSize: "cover",
      opacity: 0.75
    }
  },
  header: {
    marginBottom: "30px",
    color: "#fff",
    fontSize: "60px",
    lineHeight: "60px",
    fontWeight: "300",
    letterSpacing: "4px",
    textTansform: "uppercase"
  },
  subHeader: {
    marginBottom: "30px",
    color: "#dddddd",
    fontSize: "40px",
    fontWeight: "300",
    letterSpacing: "2px",
    textTansform: "uppercase"
  }
}));
//border-bottom: 4px solid #69b9ff;
const MainBanner = () => {
  const styleClass = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styleClass.root}
    >
      <h1 className={styleClass.header}>Naravoor</h1>
      <span className={styleClass.subHeader}>
        The place of man "Narante Ooru"
      </span>
    </Grid>
  );
};

export default MainBanner;
