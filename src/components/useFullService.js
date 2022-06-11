import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  Face,
  Newspaper,
  LibraryBooks,
  LocalGroceryStore,
  School,
  LocalTaxi,
  Plumbing
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Paper, Grid, Container } from "@mui/material";
import { getUseFullServicesTags } from "../services/actionServcies";
import AllServicesList from "./allServicesList";

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
  p: {
    color: "#6a859c",
    fontSize: "14px"
  }
}));

const UseFullServices = () => {
  const styleClass = useStyles();

  function getChipIcon(iconType) {
    switch (iconType) {
      case "NEWS":
        return <Newspaper />;
      case "LIBRARY":
        return <LibraryBooks />;
      case "SHOPS":
        return <LocalGroceryStore />;
      case "SCHOOLS":
        return <School />;
      case "TAXI":
        return <LocalTaxi />;
      case "ELECTRICAN":
        return <Plumbing />;
      default:
        return <Face />;
    }
  }

  return (
    <Container
      sx={{ padding: "80px 10px", backgroundColor: "#fff" }}
      id="services"
    >
      <h1 className={styleClass.header}>Services</h1>
      <span className={styleClass.subHeader}>
        Find all your services around you
      </span>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: "40px" }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {getUseFullServicesTags().map((item) => (
          <Chip
            sx={{ marginTop: "10px" }}
            key={item.id}
            icon={getChipIcon(item.icon)}
            label={item.title}
          />
        ))}
      </Stack>

      <AllServicesList />
    </Container>
  );
};
export default UseFullServices;
