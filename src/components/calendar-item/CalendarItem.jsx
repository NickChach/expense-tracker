import React from "react";

const CalendarItem = (props) => {
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  return (
    <div>
      <p>
        <p>{year}</p>
        {day} {month}
      </p>
    </div>
  );
};

export default CalendarItem;
