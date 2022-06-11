import React from "react";
import { Card, Typography, Avatar } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ItemTemplate = ({ item }) => {
  return (
    <>
      <CardHeader
        title={item.title}
        subheader={`${item.location}. Contact : ${item.contactInfo}`}
        sx={{ textAlign: "left" }}
        avatar={
          <Avatar
            variant="circular"
            alt="Remy Sharp"
            src={item.img}
            sx={{ width: 60, height: 60 }}
          ></Avatar>
        }
      />
      {/* <Card sx={{ maxWidth: "25%" }}>
        <CardHeader title={item.title} subheader={item.location} />
        <CardMedia
          component="img"
          height="120"
          image="../ban1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Contact : {item.conactInfo}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
};

export default ItemTemplate;
