import React, { useState } from "react";

function Clock() {
  let time = new Date().toLocaleTimeString("en-GB");

  const [timeNow, updateTime] = useState(time);

  function getCurrentTime() {
    updateTime(new Date().toLocaleTimeString("en-GB"));
  }
  setInterval(getCurrentTime, 1000);

  return <h1>{timeNow}</h1>;
}

export default Clock;