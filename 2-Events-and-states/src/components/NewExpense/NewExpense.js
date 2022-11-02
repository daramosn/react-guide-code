import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: ((Math.floor(Math.random() * 100 + 4))).toString()
        };
        // console.log(expenseData);
        props.onAddNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default newExpense;