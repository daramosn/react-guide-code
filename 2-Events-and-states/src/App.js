import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2019, 8, 10),
    title: 'Car',
    amount: 2500
  },
  {
    id: 2,
    date: new Date(2020, 5, 11),
    title: 'Taxes',
    amount: 3400
  },
  {
    id: 3,
    date: new Date(2022, 6, 19),
    title: 'Book',
    amount: 25.99
  },
  {
    id: 4,
    date: new Date(2022, 4, 20),
    title: 'Health center',
    amount: 5000
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
  };


  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses list={expenses} />
    </div>

  );
}

export default App;
