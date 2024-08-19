import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";

const Select3 = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const next = () => {
    navigate("/rail");
  };

  const before = () => {
    navigate("/ticket");
  };

  const handleTrainTypeClick = (trainType) => {
    setSelectedRegion((prevState) => ({
      ...prevState,
      trainType,
    }));
    next();
  };

  return (
    <div className="Select3">
      <div className="Header">
        <img src="../img/코레일.png" alt="Logo" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>열차 선택</h1>
          <button className="HB" onClick={next}>
            다음
          </button>
        </div>
      </div>
      <div className="Main">
        <div className="function2">
          <div>
            <h5>출발역</h5>
            <h3>{selectedRegion.departure || "고정"}</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>{selectedRegion.arrival || "선택됨"}</h3>
          </div>
        </div>
        <div className="function3">
          <div className="f3s3d">
            <button
              className="f3s3b"
              onClick={() => handleTrainTypeClick("고속열차(ktx)")}
            >
              고속열차(ktx)
            </button>
            <button
              className="f3s3b"
              onClick={() => handleTrainTypeClick("일반 열차")}
            >
              일반 열차
            </button>
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

export default Select3;
