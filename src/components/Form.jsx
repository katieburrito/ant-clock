import React from "react";
import Activity from "./Activity.jsx";

function Form() {
  return (
    <div>
      <h3>Modify Your Schedule</h3>
      <form>
        <Activity number="One" startTime="0" endTime="9" />
        <Activity number="Two" startTime="9" endTime="18" />
        <Activity number="Three" startTime="18" endTime="24" />
        <button type="submit">Modify</button>
      </form>
    </div>
  );
}

export default Form;
