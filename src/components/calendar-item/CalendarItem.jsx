import React from "react";

const CalendarItem = (props) => {
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  return (
    <div>
      <p>{month}</p>
      <p>{year}</p>
      <p>{day}</p>
    </div>
  );
};

export default CalendarItem;
