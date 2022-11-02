import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";

function Expenses(props) {
    // const [expensesList, setExpensesList] = useState(props.list);
    // const dataFilterHandler = (yearSelector) => {
    //     console.log(expensesList);
    //     const filteredList = expensesList.filter(expense => expense.date.getFullYear() === parseInt(yearSelector));
    //     setExpensesList(filteredList);

    // };

    const [yearSelected, setYearSelected] = useState('2019');

    const dataFilterHandler = (yearSelect) => {
        console.log(yearSelect);
        setYearSelected(yearSelect);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selector={yearSelected} onYearSelector={dataFilterHandler} />
            {props.list.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount} />
            ))}
        </Card>
    );
}

export default Expenses;