import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Grid, Container, Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  h5: {
    color: "#676770",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "4px",
    textTransform: "uppercase",
    textAlign: "left"
  },
  subHeader: {
    color: "#8e8e9c",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  p: {
    color: "#6a859c",
    fontSize: "14px",
    textAlign: "left"
  }
}));

const FooterSection = () => {
  const styleClass = useStyles();
  return (
    <Container sx={{ padding: "35px 15px", backgroundColor: "#edeff2" }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <h5 className={styleClass.h5}>About Naravoor</h5>
            <p className={styleClass.p}>
              The name Naravoor is derived from the Malayalam words Narante Ooru
              ("place of man"). Naravoor, is a small village near Kuthuparamba
              in the Kannur District of Kerala.
            </p>
          </Grid>
          <Grid item xs={12} md={6} textAlign={"left"}>
            <h5 className={styleClass.h5}>Usefull links</h5>
            <Link
              sx={{ color: "#6a859c" }}
              rel="noreferrer"
              target="_blank"
              href="https://www.naravoorsrimahavishnutemple.com/"
              underline="none"
              variant="body2"
            >
              Sri Mahavishnu Temple
            </Link>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterSection;
