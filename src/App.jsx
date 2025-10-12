import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseTable from './components/ExpenseTable.jsx';
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('src/assets/data.json')
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
        <div className="header">
        <h2>Expense Tracker</h2>
        <p>Start taking control of your finances and categorize and analyze your spending record.</p>
        </div>
        <div className="main">
        <div>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>
        <div>
          <input
          type="text"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} searchTerm={searchTerm} />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
