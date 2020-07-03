import React from "react";

function Schedule() {
  function checkTime() {
    return new Date().getHours();
  }

  return (
    <h1 className="current-activity">
      {checkTime() < 9 && "Good Morning"}
      {checkTime() >= 9 && checkTime() < 18 && "Time to Work"}
      {checkTime() >= 18 && "Relax Time"}
    </h1>
  );
}

export default Schedule;

// insert below into Date to test different times- the last number is the time
// 2020, 1, 1, 6
