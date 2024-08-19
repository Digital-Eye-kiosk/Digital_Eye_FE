import { useNavigate } from "react-router-dom";
import "./VRselect.css";
import "./Select.css";

const Voiceselect = () => {
  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate("/selectR");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const before = () => {
    navigate("/");
  };
  const next = () => {
    navigate("/select");
  };

  return (
    <div className="Voiceselect">
      <div className="Header">
        <img src="../img/코레일.png" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1> 음성인식 서비스 사용 여부 </h1>
          <button className="HB" onClick={next}>
            다음
          </button>
        </div>
      </div>
      <div className="Main">
        <div className="VM">
          <div>
            <h1>음성서비스를 사용하시겠습니까?</h1>
            <h3>(10초 후 자동으로 ‘예’가 선택됩니다)</h3>
          </div>

          <div className="SB2">
            {/* 음성서비스 추가 기능 아직 미구현 */}
            <button className="SB3" onClick={navigateToPurchase}>
              네
            </button>

            <button className="SB3" onClick={navigateToPurchase}>
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
