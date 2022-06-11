import React from "react";
import Header from "../components/header";
import MainBanner from "../components/mainBanner";
import ActionSection from "../components/actionSection";
import PlaceToViistGallery from "../components/placeVisitGallery";
import FooterSection from "../components/footerSection";
import UseFullServices from "../components/useFullService";
import NewsAndEvents from "../components/newsAndEvents";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <MainBanner />
      <ActionSection />
      <PlaceToViistGallery />
      <NewsAndEvents />
      <UseFullServices />
      <FooterSection />
    </div>
  );
};
export default Main;

/**
 In around you
  > Places to visit
  > Libraries
  > Stores
  > Public offices

Point of services
  1) Plumbers
  2) Electrican
  3) Carpenter

Events & Calendar
  > Library Reading Completion 
  > Chess master game 

Footer
  > About
  > Copyright 
 */
