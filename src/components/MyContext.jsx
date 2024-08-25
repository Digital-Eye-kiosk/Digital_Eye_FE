import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState({
    departureState: null,
    departure: null,
    arrival: null,
    arrivalState: null,
    travelDate: null,
    tickets: { adult: 0, senior: 0, child: 0, disabled: 0 },
    selectedTime: null,
    selectedCarPrice: null,
    carDetails: { time1: null, time2: null, carType: null, carPrice: null },
    selectedSeats: {},
  });

  return (
    <MyContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;
