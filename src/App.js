import React from "react";
import "./App.css";
import ExpensesList from "./components/expenses-list/ExpensesList";
import NewExpenseForm from "./components/new-expense-form/NewExpenseForm";

function App() {
  const expenses = [
    {
      title: "Internet",
      money: 20,
      date: new Date(2022, 7, 27),
    },
  ];

  return (
    <div className="App">
      <NewExpenseForm />
      <ExpensesList item={expenses} />
    </div>
  );
}

export default App;
