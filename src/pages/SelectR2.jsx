import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";

const regions = ["서울", "부산", "경기"];

const SelectR = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSelect2 = () => {
    navigate("/select2");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({
      ...prevState,
      arrivalState: region,
    }));
    navigateToSelect2();
  };

  const filteredRegions = regions.filter((region) =>
    region.includes(searchTerm)
  );

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="Logo" />
        <div className="function1">
          <button className="HB" onClick={() => navigate("/select")}>
            이전
          </button>
          <h1>도착 지역 선택</h1>
          <div />
        </div>
      </div>
      <div className="Main">
        <div className="function2">
          <div>
            <h5>출발역</h5>
            <h3>{selectedRegion.departure || "-"}</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>{"-"}</h3>
          </div>
        </div>
        <div className="function3">
          <div className="base">
            <div className="Search">
              <input
                placeholder="지역 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>검색</button>
            </div>
            <div className="Result2">
              {filteredRegions.map((region) => (
                <button
                  key={region}
                  className="SearchR"
                  onClick={() => handleRegionClick(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectR;
