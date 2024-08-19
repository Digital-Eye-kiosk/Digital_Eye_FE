import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

const Fianl = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="final">
      <img src="../img/코레일.png" alt="Logo" />
      <div className="text">
        <h1>안전하고 재미있는 여행 되십시오</h1>
        <h2>이용해주셔서 감사합니다</h2>
      </div>
      <h4 className="text2">
        (홈 화면으로 돌아가기까지 {countdown}초 남았습니다)
      </h4>
    </div>
  );
};

export default Fianl;
