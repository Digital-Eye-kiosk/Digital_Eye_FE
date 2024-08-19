import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./VRselect.css";
import "./Select.css";

const Voiceselect = () => {
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
    navigate("/finalselect");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({ ...prevState, arrival: region }));
    next();
  };

  return (
    <div className="Voiceselect">
      <div className="Header">
        <img src="../img/코레일.png" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1> 추천좌석 서비스 사용 여부 </h1>
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
        <div className="RM">
          <div>
            <h1>시각 장애인용 추천좌석 서비스를 이용하시겠습니까?</h1>
            <h3>(10초 후 자동으로 ‘예’가 선택됩니다)</h3>
          </div>

          <div className="SB2">
            <button className="SB3" onClick={navigateToFinal}>
              네
            </button>
            <button className="SB3" onClick={navigateToFinal}>
              아니요
            </button>
          </div>
        </div>

        <div className="Footer">
          <button className="FB" onClick={navigateToHome}>
            <img src="../img/홈화면.png" height="80px" width="80px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voiceselect;
