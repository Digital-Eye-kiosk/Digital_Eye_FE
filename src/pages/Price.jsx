import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Price.css";
import "./VRselect.css";

const Price = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToFinal = () => {
    navigate("/finalselect");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const before = () => {
    navigate("/Rail");
  };
  const next = () => {
    navigate("/Recommendselect");
  };

  return (
    <div className="PriceM">
      <div className="Header">
        <img src="../img/코레일.png" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1> 운임요금정보</h1>
          <button
            className="HB"
            onClick={() => {
              next();
            }}
          >
            다음
          </button>
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
            <h3>{selectedRegion.arrival || "-"}</h3>
          </div>
        </div>
        <div className="Price">
          <div className="classBase">
            <div className="class">
              <h2>승객 유형 </h2>
              <h2>좌석 정보 </h2>
              <h2>운임 요금</h2>
            </div>
            <div className="class">
              <h3>어른 </h3>
              <div>
                <h3>특실 </h3>
                <h3>일반실</h3>
                <h3>입석</h3>
              </div>
              <div>
                <h3>가격1</h3>
                <h3>가격2</h3>
                <h3>가격3</h3>
              </div>
            </div>
            <div className="class">
              <h3>어린이 </h3>
              <div>
                <h3>특실 </h3>
                <h3>일반실</h3>
                <h3>입석</h3>
              </div>
              <div>
                <h3>가격1</h3>
                <h3>가격2</h3>
                <h3>가격3</h3>
              </div>
            </div>
            <div className="class">
              <h3>경로 </h3>
              <div>
                <h3>특실 </h3>
                <h3>일반실</h3>
                <h3>입석</h3>
              </div>
              <div>
                <h3>가격1</h3>
                <h3>가격2</h3>
                <h3>가격3</h3>
              </div>
            </div>
            <div className="class">
              <h3>중증 장애인 </h3>
              <div>
                <h3>특실 </h3>
                <h3>일반실</h3>
                <h3>입석</h3>
              </div>
              <div>
                <h3>가격1</h3>
                <h3>가격2</h3>
                <h3>가격3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
