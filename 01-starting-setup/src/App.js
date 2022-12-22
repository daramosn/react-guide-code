import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      date: new Date(),
      title: 'Car',
      amount: 25
    },
    {
      date: new Date(),
      title: 'Taxesss',
      amount: 3400
    },
    {
      date: new Date(2022, 6, 19),
      title: 'Blalala',
      amount: 6000
    },
    {
      date: new Date(2021, 4, 20),
      title: 'Health center',
      amount: 5000
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses list={expenses} />
    </div>

  );
}

export default App;
