
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../NewExpense/ExpensesChart";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";

function Expenses(props) {

    const [yearSelected, setYearSelected] = useState('2019');

    const dataFilterHandler = (yearSelect) => {
        console.log(yearSelect);
        setYearSelected(yearSelect);
    };

    const filteredExpenses = props.list.filter(expense => expense.date.getFullYear() === parseInt(yearSelected));

    return (
        <Card className='expenses'>
            <ExpensesFilter selector={yearSelected} onYearSelector={dataFilterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;