import React from "react";

function Activity(props) {
  return (
    <div>
      <label for={props.number}>Input Activity</label>
      <input type="text" id={props.number} name={props.number} />
      <label for="startTime">Start Time</label>
      <input type="time" id="startTime" name="startTime" value="09:00" />
      <label for="endTime">End Time</label>
      <input type="time" id="endTime" name="endTime" value="18:00" />
    </div>
  );
}

export default Activity;
