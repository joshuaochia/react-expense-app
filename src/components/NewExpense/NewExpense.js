import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [FormCondition, setFormCondition] = useState(true);

  const btnOnClickHandler = (_, conditionParam = false) => {
    setFormCondition(conditionParam);
  };

  const BTN = <button onClick={btnOnClickHandler}>Add Expense</button>;

  return (
    <div>
      <div className="new-expense">
        {FormCondition ? (
          BTN
        ) : (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            cancelHandler={btnOnClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
