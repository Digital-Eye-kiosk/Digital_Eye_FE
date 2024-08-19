import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";

const SelectR = () => {
  const navigate = useNavigate();
  const { setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSelect2 = () => {
    navigate("/select");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({ ...prevState, departure: region }));
    navigateToSelect2();
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="Logo" />
        <div className="function1">
          <button className="HB" onClick={() => navigate("/")}>
            이전
          </button>
          <h1>지역 선택</h1>
          <button className="HB" onClick={navigateToSelect2}>
            다음
          </button>
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
            <div className="Search">
              <input placeholder="지역 검색" />
              <button>검색</button>
            </div>
            <div className="Result">
              <button
                className="SearchR"
                onClick={() => handleRegionClick("서울")}
              >
                서울
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("부산")}
              >
                부산
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("경기")}
              >
                경기
              </button>
            </div>
          </div>
        </div>
        <div className="Footer">
          <button className="FB" onClick={navigateToHome}>
            <img
              src="../img/홈화면.png"
              alt="Home"
              height="80px"
              width="80px"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectR;
