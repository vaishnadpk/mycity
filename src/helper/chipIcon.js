import React from "react";
import {
  Face,
  Newspaper,
  LibraryBooks,
  LocalGroceryStore,
  School,
  LocalTaxi,
  Plumbing,
  TempleHindu,
  Map,
  Campaign,
  Radar
} from "@mui/icons-material";

export function getChipIcon(iconType, props = {}) {
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
    case "ELECTRICIAN":
      return <Plumbing />;
    case "TEMPLE":
      return <TempleHindu />;
    case "MAP":
      return <Map {...props} />;
    case "EVENTS":
      return <Campaign {...props} />;
    case "RADAR":
      return <Radar {...props} />;
    default:
      return <Face {...props} />;
  }
}
