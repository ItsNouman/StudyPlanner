import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Convert seconds into MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.timerText}>{formatTime(timeLeft)}</h2>
      <div>
        <button onClick={() => setIsRunning(!isRunning)} style={styles.button}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => setTimeLeft(25 * 60)} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "10px",
    margin: "10px 0",
    background: "#f1f1f1",
    borderRadius: "10px",
  },
  timerText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    padding: "8px 15px",
    margin: "5px",
    fontSize: "16px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Timer;
