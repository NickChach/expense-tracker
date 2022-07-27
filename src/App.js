import "./App.css";
import ExpensesList from "./components/expenses-list/ExpensesList";

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
      <ExpensesList item={expenses} />
    </div>
  );
}

export default App;
