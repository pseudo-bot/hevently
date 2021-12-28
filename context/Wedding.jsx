import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [eventData, setEventData] = useState({
    venue: null,
    startDate: "",
    endDate: "",
    guestList: [],
  });
  const setVenue = (venue) => {
    let newVenue = Object.assign({}, eventData);
    newVenue.venue = venue;
    setEventData(newVenue);
  };

  const setStartDate = (startDate) => {
    let newStartDate = Object.assign({}, eventData);
    newStartDate.startDate = startDate;
    setEventData(newStartDate);
  };

  const setEndDate = (endDate) => {
    let newEndDate = Object.assign({}, eventData);
    newEndDate.endDate = endDate;
    setEventData(newEndDate);
  };

  const setGuestList = (list) => {
    let ob = Object.assign({}, eventData); 
    ob.guestList = list;
    setEventData(ob);
  }

  return (
    <WeddingContext.Provider
      value={{ eventData, setVenue, setStartDate, setEndDate, setGuestList }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
