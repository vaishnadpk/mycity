import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container, Chip, Divider } from "@mui/material";
import { getChipIcon } from "../helper/chipIcon";
import ItemTemplate from "./servicesItems/itemTemplate";
import { getAllServicesData } from "../services/actionServcies";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

const AllServicesList = ({ serviceName }) => {
  const [expanded, setExpanded] = React.useState("library");

  const serviceData = getAllServicesData();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "library"}
        onChange={handleChange("library")}
      >
        <AccordionSummary aria-controls="library-content" id="library-header">
          <Chip icon={getChipIcon("LIBRARY")} label={"Library"} />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.library.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "shops"}
        onChange={handleChange("shops")}
      >
        <AccordionSummary aria-controls="shops-content" id="shops-header">
          <Chip icon={getChipIcon("SHOPS")} label={"Shops"} />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.shops.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "schools"}
        onChange={handleChange("schools")}
      >
        <AccordionSummary aria-controls="schools-content" id="schools-header">
          <Chip icon={getChipIcon("SCHOOLS")} label={"Schools"} />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.schools.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "taxi"}
        onChange={handleChange("taxi")}
      >
        <AccordionSummary aria-controls="taxi-content" id="taxi-header">
          <Chip icon={getChipIcon("TAXI")} label={"Taxi"} />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.taxi.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "temple"}
        onChange={handleChange("temple")}
      >
        <AccordionSummary aria-controls="temple-content" id="temple-header">
          <Chip icon={getChipIcon("TEMPLE")} label={"Temple"} />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.temple.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "electrician"}
        onChange={handleChange("electrician")}
      >
        <AccordionSummary
          aria-controls="electrician-content"
          id="electrician-header"
        >
          <Chip
            icon={getChipIcon("ELECTRICIAN")}
            label={"Electrician & Plumper"}
          />
        </AccordionSummary>
        <AccordionDetails>
          {serviceData.electrician.map((x) => (
            <>
              <ItemTemplate item={x} />
              <Divider sx={{ marginTop: "20px" }} />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
export default AllServicesList;
