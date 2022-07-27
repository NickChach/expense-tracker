import React from "react";
import ExpenseItem from "../expense-item/ExpenseItem";

const ExpensesList = (props) => {
  const item = props.item;

  return (
    <ExpenseItem
      title={item[0].title}
      money={item[0].money}
      date={item[0].date}
    />
  );
};

export default ExpensesList;
