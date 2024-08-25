import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";

const Select = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const before = () => {
    navigate("/selectR");
  };

  const next = () => {
    navigate("/selectR2");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({ ...prevState, departure: region }));
    next();
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="Logo" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>{selectedRegion.departureState} 내 출발역 선택</h1>
          <div />
        </div>
      </div>
      <div className="Main">
        <div className="function2">
          <div>
            <h5>출발역</h5>
            <h3>-</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>-</h3>
          </div>
        </div>
        <div className="function3">
          <div className="base">
            <div className="Result">
              <button
                className="SearchR"
                onClick={() => handleRegionClick("A")}
              >
                A
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("B")}
              >
                B
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("C")}
              >
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
