import React from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  return (
    <form id="NewExpenseForm">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" min={0.01} step="0.01" />
      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="date" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewExpenseForm;
