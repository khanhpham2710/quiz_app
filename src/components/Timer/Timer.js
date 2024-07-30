import React, { useEffect, useState } from 'react';

function Timer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft,onTimeUp]);

  const progressBarWidth = (timeLeft / duration) * 100;

  return (
    <div className="timer">
      <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
      <div className="time-left">{timeLeft}s</div>
    </div>
  );
}

export default Timer;
