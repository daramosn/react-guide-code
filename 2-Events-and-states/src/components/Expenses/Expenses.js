import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpensesFilter />
            {props.list.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </Card>
    );
}

export default Expenses;