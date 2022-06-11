import allserviceJson from "../data/allServices.json";
export const getActionOptions = () => {
  return [
    {
      id: "places",
      name: "Top Attractions",
      href: "#",
      description: "Our top attractions",
      icon: "MAP"
    },
    {
      id: "events",
      name: "News & Events",
      href: "#",
      description: "News,events & announcement",
      icon: "EVENTS"
    },
    {
      id: "services",
      name: "Local Services",
      href: "#",
      description: "Scools, library, taxi, shops",
      icon: "RADAR"
    }
  ];
};

export const getPlaceToVisitGallery = () => {
  return [
    {
      img: "../quarry.jpeg",
      title: "Naravoor Para",
      subTitle: "Naravoor quarry"
    },
    {
      img: "../mahavishnu.jpeg",
      title: "Sri Mahavishnu Temple",
      subTitle: "Sree Mahavishnu Temple, Naravoor"
    },
    {
      img: "https://images.pexels.com/photos/1838545/pexels-photo-1838545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Paddy field",
      subTitle: "Naravoor paddy field"
    }
  ];
};

export const getUseFullServicesTags = () => {
  return [
    {
      id: "library",
      title: "Library",
      icon: "LIBRARY",
      color: "#fff"
    },
    {
      id: "shops",
      title: "Shops",
      icon: "SHOPS",
      color: "#fff"
    },
    {
      id: "schools",
      title: "Schools",
      icon: "SCHOOLS",
      color: "#fff"
    },
    {
      id: "taxi",
      title: "Taxi",
      icon: "TAXI",
      color: "#fff"
    },
    {
      id: "electrican",
      title: "Electrician & Plumber",
      icon: "ELECTRICIAN",
      color: "#fff"
    }
  ];
};

export const getEvents = (type) => {
  return [
    {
      id: "1",
      type: "EVENT",
      date: new Date(),
      title: "Junior chess competion",
      description:
        "Naravoor youth club conducting chess competetion for juniors",
      contact: "+911234567890"
    },
    {
      id: "2",
      type: "EVENT",
      date: new Date(),
      title: "Junior drawing competion",
      description:
        "Naravoor youth club conducting drawing competetion for juniors",
      contact: "+911234567890"
    },
    {
      id: "3",
      type: "NEWS",
      date: new Date(),
      title: "Annual library meeting",
      description: "Naravoor youth club conducting annual library meeting",
      contact: "+911234567890"
    },
    {
      id: "4",
      type: "NEWS",
      date: new Date(),
      title: "Naravoor school admission open",
      description: "Naravoor LP school spot adimission",
      contact: "+911234567890"
    }
  ].filter((x) => x.type === type);
};

export const getAllServicesData = () => {
  return allserviceJson;
};
