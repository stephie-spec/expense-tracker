import { useState } from 'react'

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      onAddExpense({ name: expenseName, description, category, amount, date });
      setExpenseName('');
      setDescription('');
      setCategory('');
      setAmount('');
      setDate('');
    
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Enter expense name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter expense description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter expense category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;