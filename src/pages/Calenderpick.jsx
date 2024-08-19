import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Select.css";
import "./Calenderpick.css";

const Calenderpick = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);
  const [date, setDate] = useState(new Date());

  const navigateToHome = () => {
    navigate("/");
  };

  const before = () => {
    navigate("/select2");
  };

  const next = () => {
    navigate("/ticket");
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
  };

  const handleDateChange = (date) => {
    setDate(date);
    setSelectedRegion((prevState) => ({ ...prevState, travelDate: date }));
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
          <h1>날짜 선택</h1>
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
        <div className="function3C">
          <Calendar onChange={handleDateChange} value={date} />
          {/* <p>출발일: {formatDate(date)}</p> */}
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

export default Calenderpick;
