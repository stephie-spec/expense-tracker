import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setExpenses(data));
  }, []);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <>
      <div className="container">
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and categorize and analyze your spending record.</p>
        <input
          type="text"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} searchTerm={searchTerm} />
      </div>
    </>
  )
}

export default App
