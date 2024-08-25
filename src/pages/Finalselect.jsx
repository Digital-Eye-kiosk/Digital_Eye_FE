import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";
import "./FinalSelect.css";

const Finalselect = () => {
  const navigate = useNavigate();
  const { selectedRegion } = useContext(MyContext);

  const navigateTo = (path) => {
    navigate(path);
  };

  const final = () => {
    navigate("/final");
  };

  // 좌석 정보를 포맷팅하는 함수
  const formatSeats = (seats) => {
    return Object.entries(seats)
      .map(
        ([car, seatsArray]) =>
          `호차 ${parseInt(car) + 1}: ${seatsArray
            .map((seat) => `좌석 ${seat + 1}`)
            .join(", ")}`
      )
      .join(" | ");
  };

  return (
    <div className="Finalselect">
      <div className="Header">
        <img src="../img/코레일.png" alt="로고" />
        <div className="function1">
          <button className="HB" onClick={() => navigateTo("/Seat")}>
            이전
          </button>
          <h1>최종 확인</h1>
          <button className="HB"></button>
        </div>
      </div>
      <div className="Main">
        <div className="function2F">
          <h2>만약 정보가 틀리시다면 해당 버튼을 눌러 수정하십시오</h2>
          <h4>(당일결제 시 환불이 불가하오니 유의 바랍니다)</h4>
        </div>

        <div className="function3F">
          <div className="BunchFB">
            <button className="FinalB" onClick={() => navigateTo("/select")}>
              지역 > {selectedRegion.departure || "선택되지 않음"}
            </button>
            <button className="FinalB" onClick={() => navigateTo("/select2")}>
              도착역 > {selectedRegion.arrival || "선택되지 않음"}
            </button>
            <button
              className="FinalB"
              onClick={() => navigateTo("/calenderpick")}
            >
              출발일 >{" "}
              {selectedRegion.travelDate
                ? new Intl.DateTimeFormat("ko-KR").format(
                    new Date(selectedRegion.travelDate)
                  )
                : "선택되지 않음"}
            </button>
            <button
              style={{ fontSize: "26px" /* , fontWeight: 540 */ }}
              className="FinalB"
              onClick={() => navigateTo("/ticket")}
            >
              인원 >{" "}
              {`성인: ${selectedRegion.tickets.adult}, 노인: ${selectedRegion.tickets.senior}, 아동: ${selectedRegion.tickets.child}, 장애인: ${selectedRegion.tickets.disabled}`}
            </button>

            <button className="FinalB" onClick={() => navigateTo("/Rail")}>
              열차시간 > {selectedRegion.carDetails.time1 || "선택되지 않음"} >{" "}
              {selectedRegion.carDetails.time2 || "선택되지 않음"}
            </button>
            <button className="FinalB" onClick={() => navigateTo("/Rail")}>
              가격 > {selectedRegion.carDetails.carPrice || "선택되지 않음"}
            </button>
            <button className="FinalB">
              좌석정보 >{" "}
              {selectedRegion.selectedSeats
                ? formatSeats(selectedRegion.selectedSeats)
                : "선택되지 않음"}
            </button>
          </div>
        </div>
        <div className="Footer">
          <div className="SB2">
            <button className="FinalB2" onClick={final}>
              예
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalselect;
