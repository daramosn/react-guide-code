import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: ((Math.floor(Math.random() * 100 + 4))).toString()
        };
        // console.log(expenseData);
        props.onAddNewExpense(expenseData);
    }

    const editingToggleHandler = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="new-expense">
            {!isEditing &&
                <button onClick={editingToggleHandler}>Add new Expense</button>}
            {isEditing &&
                <ExpenseForm notEditing={editingToggleHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;