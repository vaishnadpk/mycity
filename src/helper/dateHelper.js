const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const getMonthName = (dt) => {
  return month[dt.getMonth()];
};

export const getWeekDayName = (dt) => {
  return weekday[dt.getDay()];
};
