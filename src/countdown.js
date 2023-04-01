import React, { useState, useEffect } from "react";

import '../src/CSS/NeumorphicCard.css';
const Countdown = () => {
  const [countdown, setCountdown] = useState("");
  const [countdownObj, setCountDownObj] = useState({});

  useEffect(() => {
    const countdownDate = new Date("2023-03-16T00:00:00Z"); // set your event date here
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      let tempObj = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }
      setCountDownObj(tempObj);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div>
      {/* <div className="neumorphic-card"> */}
      <div className="flex flex-wrap md:justify-center">
        <div className="neumorphic-card-content" >
          <h2 className="card-text"  >{countdownObj.days} days</h2>
        </div>
        <div className="neumorphic-card-content">
          <h2 className="card-text"  >{countdownObj.hours} hrs</h2>
        </div>
        <div className="neumorphic-card-content">
          <h2 className="card-text"  >{countdownObj.minutes} mins</h2>
        </div>
        <div className="neumorphic-card-content">
          <h2 className="card-text"  >{countdownObj.seconds} sec</h2>
        </div>
      </div>
    </div>

  );
};

export default Countdown;