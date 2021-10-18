import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSE = [
  {
    id: "e0",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 0, 1),
  },
  {
    id: "e1",
    title: "Computer",
    amount: 899.12,
    date: new Date(2020, 0, 1),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 3, 8),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 5, 5),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 8, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const ExpenseData = (data) => {
    console.log(data);
    setExpenses((prevExpense) => {
      console.log([prevExpense]);
      return [data, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={ExpenseData}></NewExpense>

      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
