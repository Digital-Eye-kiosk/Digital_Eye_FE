import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Rail.css";

const Rail = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const time1Ref = useRef();
  const time2Ref = useRef();
  const priceRef = useRef();

  const before = () => {
    navigate("/ticket");
  };

  const next = () => {
    navigate("/price");
  };

  const handleButtonClick = (carPrice) => {
    const time1Text = time1Ref.current?.innerText || "";
    const time2Text = time2Ref.current?.innerText || "";
    const priceText = priceRef.current?.innerText || "";

    setSelectedRegion((prevState) => ({
      ...prevState,
      carDetails: {
        time1: time1Text,
        time2: time2Text,
        carPrice: priceText,
      },
      selectedCarPrice: carPrice,
    }));

    next();
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="로고" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>열차 시간 선택</h1>
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
            <h3>{selectedRegion.arrival || "-"}</h3>
          </div>
        </div>

        <div className="function3R">
          <div className="R">
            <div className="place">
              <h1>{selectedRegion.departure || "-"}</h1>
              <h1>></h1>
              <h1>{selectedRegion.arrival || "-"}</h1>
            </div>
            <div className="data">
              <button
                className="RB"
                onClick={() => handleButtonClick("carType1", 10000)}
              >
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        시간1-1
                      </h2>
                      <h2>시간1-2</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        시간2-1
                      </h2>
                      <h2>시간2-2</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <div className="RD5">
                      <h2 ref={priceRef}>10,000</h2>{" "}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rail;
