import React from "react";
import CalendarItem from "../calendar-item/CalendarItem";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const title = props.title;
  const money = props.money;
  const date = props.date;

  return (
    <article id="ExpenseItem">
      <h2>{title}</h2>
      <section>
        <CalendarItem date={date} />
        <p>{money}€</p>
      </section>
    </article>
  );
};

export default ExpenseItem;
