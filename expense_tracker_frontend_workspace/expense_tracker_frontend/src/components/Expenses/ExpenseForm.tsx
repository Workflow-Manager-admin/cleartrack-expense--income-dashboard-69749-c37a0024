import React, { useState, useEffect } from 'react';
import { Expense } from '../../types';
import { inputStyles, buttonStyles } from '../../styles';

interface ExpenseFormProps {
  expense?: Expense;
  onSubmit: (expense: Omit<Expense, '_id'>) => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ expense, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount);
      setDate(new Date(expense.date).toISOString().split('T')[0]);
      setCategory(expense.category);
      setDescription(expense.description);
    }
  }, [expense]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, amount, date, category, description });
  };

  return (
        <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={inputStyles}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
        style={inputStyles}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={inputStyles}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={inputStyles}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ ...inputStyles, height: '100px' }}
      />
      <button type="submit" style={buttonStyles}>
        {expense ? 'Update' : 'Add'} Expense
      </button>
    </form>
  );
};
