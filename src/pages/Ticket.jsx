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
    navigate("/rail");
  };

  const [adultCount, setAdultCount] = useState(selectedRegion.tickets.adult);
  const [seniorCount, setSeniorCount] = useState(selectedRegion.tickets.senior);
  const [childCount, setChildCount] = useState(selectedRegion.tickets.child);
  const [disabledCount, setDisabledCount] = useState(
    selectedRegion.tickets.disabled
  );

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
            <h3>{selectedRegion.departure || "-"}</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>{selectedRegion.arrival || "-"}</h3>
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
      </div>
    </div>
  );
};

export default Ticket;
