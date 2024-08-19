import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState({
    departure: null,
    arrival: null,
    trainType: null,
    travelDate: null,
    tickets: { adult: 0, senior: 0, child: 0, disabled: 0 },
    selectedTime: null,
    selectedCar: null,
    selectedCarPrice: null,
    carDetails: { time1: null, time2: null, carType: null, carPrice: null },
  });

  return (
    <MyContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;
