import React from "react";
import ExpenseItem from "./Expenseitem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.filteredArr.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredArr.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
