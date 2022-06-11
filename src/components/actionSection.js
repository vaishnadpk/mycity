import React from "react";
import { Paper, Box, Container, Typography } from "@mui/material";
import { getActionOptions } from "../services/actionServcies";
import { makeStyles } from "@mui/styles";
import { getChipIcon } from "../helper/chipIcon";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#676770",
    fontSize: "30px",
    fontWeight: "300",
    letterSpacing: "5px",
    textTransform: "uppercase"
  },
  subHeader: {
    color: "#8e8e9c",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  item: {
    color: "#8e8e9c",
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: "3px",
    textTransform: "uppercase"
  },
  p: {
    color: "#6a859c",
    fontSize: "14px"
  }
}));

const ActionSection = () => {
  const styleClass = useStyles();
  function onActionClick(id) {
    const elemnt = document.getElementById(id);
    elemnt && elemnt.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Container sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <h2 className={styleClass.header}>getting around</h2>
      <div className={styleClass.subHeader}>find everything about navavoor</div>

      <Box
        sx={{ display: "flex", marginTop: "50px", justifyContent: "center" }}
      >
        {getActionOptions().map((x) => (
          <Box
            key={x.id}
            sx={{
              "& > :not(style)": {
                m: 1,
                width: { lg: "200px", sm: "200px", xs: "calc(100vw / 3.4);" },
                height: { lg: "250px", sm: "250px", xs: "200px" },
                padding: "15px",
                cursor: "pointer"
              }
            }}
            onClick={() => onActionClick(x.id)}
          >
            <Paper elevation={3}>
              <div style={{ marginTop: "20px" }}>
                {getChipIcon(x.icon, {
                  sx: {
                    width: "50%",
                    height: "50%",
                    color: "#3399f3"
                  }
                })}

                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: "#8e8e9c",

                    fontSize: { lg: "18px", sm: "18px", xs: "14px" },
                    fontWeight: "300",
                    letterSpacing: { lg: "3px", sm: "3px", xs: "0px" },
                    textTransform: "uppercase",
                    mt: "18px"
                  }}
                >
                  {x.name}
                </Typography>
              </div>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ActionSection;
