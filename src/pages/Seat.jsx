import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";
import "./Seat.css";

const Seat = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const [currentCar, setCurrentCar] = useState(0); // 현재 열차 칸 상태
  const [clickedSeats, setClickedSeats] = useState({}); // 각 칸별 좌석 상태를 저장할 객체

  const navigateToFinal = () => {
    // 선택한 좌석 정보를 Context에 저장
    setSelectedRegion((prev) => ({
      ...prev,
      selectedSeats: clickedSeats,
    }));
    navigate("/finalselect");
  };

  const before = () => {
    navigate("/Recommendselect");
  };

  const next = () => {
    // 선택한 좌석 정보를 Context에 저장
    setSelectedRegion((prev) => ({
      ...prev,
      selectedSeats: clickedSeats,
    }));
    navigate("/finalselect");
  };

  // 열차 칸 변경 핸들러
  const handleCarChange = (direction) => {
    setCurrentCar((prev) => Math.max(0, prev + direction)); // 다음 또는 이전 칸으로 이동
  };

  // 선택 가능한 최대 좌석 수 계산
  const maxSeats = Object.values(selectedRegion.tickets).reduce(
    (acc, curr) => acc + curr,
    0
  );

  // 클릭된 좌석 관리
  const handleClick = (index) => {
    const carSeats = clickedSeats[currentCar] || [];
    if (carSeats.includes(index)) {
      setClickedSeats((prev) => ({
        ...prev,
        [currentCar]: carSeats.filter((i) => i !== index),
      }));
    } else if (Object.values(clickedSeats).flat().length < maxSeats) {
      setClickedSeats((prev) => ({
        ...prev,
        [currentCar]: [...carSeats, index],
      }));
    }
  };

  return (
    <div className="Header">
      <img src="../img/코레일.png" alt="코레일" />
      <div className="function1">
        <button className="HB" onClick={before}>
          이전
        </button>
        <h1>좌석 선택</h1>
        <button className="HB" onClick={next}>
          다음
        </button>
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
        <div className="Seat">
          <div className="baseS">
            <div className="ResultS">
              <div className="Seat2">
                <div className="right">
                  <h2>{currentCar + 1}호차</h2>
                  <div className="right2">
                    <button onClick={() => handleCarChange(-1)}>이전 칸</button>
                    <button onClick={() => handleCarChange(1)}>다음 칸</button>
                  </div>
                </div>

                <div className="Seat3">
                  {[...Array(12)].map((_, index) => (
                    <button
                      key={index}
                      className={`SeatB ${
                        (clickedSeats[currentCar] || []).includes(index)
                          ? "clicked"
                          : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      좌석 {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
