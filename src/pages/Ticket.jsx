import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Ticket.css";

const Ticket = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const before = () => {
    navigate("/calenderpick");
  };

  const next = () => {
    navigate("/select3");
  };

  const [adultCount, setAdultCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [disabledCount, setDisabledCount] = useState(0);

  useEffect(() => {
    if (selectedRegion.tickets) {
      setAdultCount(selectedRegion.tickets.adult || 0);
      setSeniorCount(selectedRegion.tickets.senior || 0);
      setChildCount(selectedRegion.tickets.child || 0);
      setDisabledCount(selectedRegion.tickets.disabled || 0);
    }
  }, [selectedRegion.tickets]);

  useEffect(() => {
    setSelectedRegion((prevState) => ({
      ...prevState,
      tickets: {
        adult: adultCount,
        senior: seniorCount,
        child: childCount,
        disabled: disabledCount,
      },
    }));
  }, [adultCount, seniorCount, childCount, disabledCount, setSelectedRegion]);

  const increaseCount = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const decreaseCount = (setter, count) => {
    setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="코레일" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>탑승인원 선택</h1>
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
            <h3>{selectedRegion.departure || "고정"}</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>{selectedRegion.arrival || "선택됨"}</h3>
          </div>
        </div>

        <div className="function3T">
          <div className="TB">
            <div className="TBB">
              <h1>어른, 청소년</h1>
              <h3>(만 13세 이상)</h3>
            </div>
            <div className="TBB2">
              <button
                className="TBBB"
                onClick={() => decreaseCount(setAdultCount, adultCount)}
              >
                -
              </button>
              <h1>{adultCount}</h1>
              <button
                className="TBBB"
                onClick={() => increaseCount(setAdultCount)}
              >
                +
              </button>
            </div>
          </div>
          <div className="TB">
            <div className="TBB">
              <h1>경로</h1>
              <h3>(만 65세 이상)</h3>
            </div>
            <div className="TBB2">
              <button
                className="TBBB"
                onClick={() => decreaseCount(setSeniorCount, seniorCount)}
              >
                -
              </button>
              <h1>{seniorCount}</h1>
              <button
                className="TBBB"
                onClick={() => increaseCount(setSeniorCount)}
              >
                +
              </button>
            </div>
          </div>
          <div className="TB">
            <div className="TBB">
              <h1>어린이</h1>
              <h3>(만 6~12세)</h3>
            </div>
            <div className="TBB2">
              <button
                className="TBBB"
                onClick={() => decreaseCount(setChildCount, childCount)}
              >
                -
              </button>
              <h1>{childCount}</h1>
              <button
                className="TBBB"
                onClick={() => increaseCount(setChildCount)}
              >
                +
              </button>
            </div>
          </div>
          <div className="TB">
            <div className="TBB">
              <h1>중증장애인</h1>
              <h3>(장애 1~3급)</h3>
            </div>
            <div className="TBB2">
              <button
                className="TBBB"
                onClick={() => decreaseCount(setDisabledCount, disabledCount)}
              >
                -
              </button>
              <h1>{disabledCount}</h1>
              <button
                className="TBBB"
                onClick={() => increaseCount(setDisabledCount)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="Footer">
          <button className="FB" onClick={navigateToHome}>
            <img
              src="../img/홈화면.png"
              height="80px"
              width="80px"
              alt="홈화면"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
