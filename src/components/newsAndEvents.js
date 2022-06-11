import React from "react";
import Stack from "@mui/material/Stack";
import {
  Face,
  Newspaper,
  LibraryBooks,
  LocalGroceryStore,
  School
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import {
  ListItem,
  List,
  Grid,
  Container,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Event";
import CampaignIcon from "@mui/icons-material/Campaign";
import { getUseFullServicesTags, getEvents } from "../services/actionServcies";
import { getWeekDayName } from "../helper/dateHelper";

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

const NewsAndEvents = () => {
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
      default:
        return <Face />;
    }
  }

  function getEventTemplate(item) {
    return (
      <ListItem key={item.id}>
        <ListItemAvatar>
          <Avatar>
            {item.type === "EVENT" ? <ImageIcon /> : <CampaignIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.date.toDateString()}
              </Typography>
              {" - "}
              {item.description}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }

  return (
    <Container
      sx={{ padding: "80px 10px", backgroundColor: "#dddddd" }}
      id="events"
    >
      <h1 className={styleClass.header}>Upcoming Events</h1>
      <span className={styleClass.subHeader}>
        Latest announcements, news and events
      </span>
      <Stack
        direction="row"
        spacing={1}
        sx={{ marginTop: "40px" }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <List sx={{ width: "48%" }}>
          {getEvents("EVENT").map((evnt) => getEventTemplate(evnt))}
        </List>

        <List sx={{ width: "48%" }}>
          {getEvents("NEWS").map((evnt) => getEventTemplate(evnt))}
        </List>
      </Stack>
    </Container>
  );
};
export default NewsAndEvents;
