import { useRef, useState, useEffect } from "react";
import "./Google.css";

const GoogleTimer = () => {
  const [timer, setTimer] = useState(0);
  const [num, Setnum] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
  }, []);
  const startTimer = (num) => {
    if (ref.current) return;
    ref.current = setInterval(() => {
      setTimer((time) => time + 1);
      // console.log(timer)
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref.current);

    ref.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  const SetTimer = () => {
    startTimer(num);
  };

  return (
    <div>
      <h3 className="h3">GoogleTimer</h3>

      <div
        className="box"
        style={{
          border: "2px solid black",
          height: "20vw",
          width: "20vw",
          margin: "auto",
          paddingTop: "2vw"
        }}
      >
        <div>
          <input
            className="inp"
            type="number"
            value={num}
            onChange={(e) => Setnum(e.target.value)}
          />
          <button className="btn" onClick={SetTimer}>
            SetTime
          </button>
        </div>
        <div>
          <h1 className="timer">
            Timer: {Number(timer) === Number(num) ? stopTimer() : timer}
          </h1>
          <button className="btn" onClick={startTimer}>
            START
          </button>
          <button className="btn" onClick={stopTimer}>
            PAUSE
          </button>
          <button className="btn" onClick={resetTimer}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleTimer;
