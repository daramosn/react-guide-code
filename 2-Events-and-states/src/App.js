import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 1,
      date: new Date(2019, 8, 10),
      title: 'Car',
      amount: 25
    },
    {
      id: 2,
      date: new Date(2020, 5, 11),
      title: 'Taxesss',
      amount: 3400
    },
    {
      id: 3,
      date: new Date(2022, 6, 19),
      title: 'Blalala',
      amount: 6000
    },
    {
      id: 4,
      date: new Date(2021, 4, 20),
      title: 'Health center',
      amount: 5000
    }
  ]

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log(expenses);
  };


  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses list={expenses} />
    </div>

  );
}

export default App;
