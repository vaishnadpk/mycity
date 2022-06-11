import React from "react";
import { Grid, IconButton, Link, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  function handleDrawerOpen() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        paddingLeft: { lg: "50px", sm: "25px", xs: "20px" },
        paddingRight: { lg: "50px", sm: "25px", xs: "20px" },
        height: "60px"
      }}
    >
      <h1
        style={{
          color: "#69b9ff",
          fontWeight: 300,
          letterSpacing: "4px",
          lineHeight: "1px"
        }}
      >
        Naravoor
      </h1>

      <Grid
        role="navigation"
        sx={{
          display: { xs: "none", sm: "block", lg: "block" }
        }}
      >
        <Link
          href="#"
          aria-current="page"
          underline="none"
          paddingRight={"20px"}
          variant="body2"
        >
          Home
        </Link>
        <Link href="#" underline="none" variant="body2">
          About
        </Link>
      </Grid>

      <IconButton
        sx={{
          display: { xs: "block", sm: "none", lg: "none" }
        }}
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"right"} open={isDrawerOpen} onClose={handleDrawerOpen}>
        <List onClick={handleDrawerOpen}>
          <ListItem sx={{ minWidth: "150px", justifyContent: "center" }}>
            <Link href="#" aria-current="page" underline="none" variant="body2">
              Home
            </Link>
          </ListItem>

          <ListItem sx={{ minWidth: "150px", justifyContent: "center" }}>
            <Link href="#" underline="none" variant="body2">
              About
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  );
};

export default Header;
